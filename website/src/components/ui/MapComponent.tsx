"use client";

import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "./button";
import Link from "next/link";
import { Rating } from "~/components/post";

type MapMode = "single" | "combined";

interface BaseMapProps {
  mode: MapMode;
  mapStyle?: string;
  initialViewport?: {
    latitude: number;
    longitude: number;
    zoom?: number;
  };
}

interface SingleLocationProps extends BaseMapProps {
  mode: "single";
  location: [number, number];
  locations?: never;
}

interface CombinedLocationsProps extends BaseMapProps {
  mode: "combined";
  locations: Array<{
    location: [number, number];
    rating: number;
    date: string;
    title: string;
    slug: string;
  }>;
  location?: never;
}

type MapComponentProps = SingleLocationProps | CombinedLocationsProps;

export default function MapComponent(props: MapComponentProps) {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const defaultViewport = {
    latitude: props.mode === "single" 
      ? props.location[0] 
      : -34.9285, // Default to Adelaide
    longitude: props.mode === "single" 
      ? props.location[1] 
      : 138.6007,
    zoom: props.initialViewport?.zoom ?? (props.mode === "single" ? 14 : 12)
  };

   const RatingPill = ({ rating, title }: { rating: number; title?: string }) => (
     <Rating 
       value={rating} 
       className={`text-white !border-white/30 hover:!border-white/50`} 
     />
   );

  return (
    <div 
      className={`map-container ${props.mode === "single" ? "h-[400px] mb-10" : "h-[500px] mb-4"}`}
    >
      <Map
        initialViewState={defaultViewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle={props.mapStyle ?? "mapbox://styles/mapbox/dark-v11"}
        mapboxAccessToken="pk.eyJ1IjoiZm9yYml0IiwiYSI6ImNtZTlhZGJ0eDBtbzYybXE0a2FqempsemMifQ.ghfgbxyGSY-fKtpkhktLgA"
        attributionControl={false}
      >
        {props.mode === "single" ? (
          <Marker 
            latitude={props.location[0]} 
            longitude={props.location[1]} 
            anchor="center"
          >
            <div 
              className="mapboxgl-marker" 
              style={{ 
                backgroundColor: "#3b82f6", 
                borderRadius: "50%", 
                width: "15px", 
                height: "15px", 
                border: "2px solid white" 
              }} 
            />
          </Marker>
        ) : (
          props.locations.map((loc) => (
            <Marker
              key={loc.slug}
              latitude={loc.location[0]}
              longitude={loc.location[1]}
              anchor="center"
              onClick={() => setSelectedLocation(loc)}
            >
               <div className="backdrop-blur-2xl bg-neutral-500/10 hover:bg-neutral-600/70 transition-all duration-300 hover:cursor-pointer rounded-full">
                 <RatingPill rating={loc.rating} title={loc.title} />
               </div>
            </Marker>
          ))
        )}

        {props.mode === "combined" && selectedLocation && (
          <Popup
            latitude={selectedLocation.location[0]}
            longitude={selectedLocation.location[1]}
            onClose={() => setSelectedLocation(null)}
            closeOnClick={false}
            className="custom-popup"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{selectedLocation.title}</h3>
              <div className="flex flex-row gap-2 items-center">
                <time className="text-sm text-neutral-300">{selectedLocation.date}</time>
                 <Rating 
                   value={selectedLocation.rating} 
                   className={`text-white !border-white/30 hover:!border-white/50`} 
                 />
              </div>
              <Link href={`/cafe/${selectedLocation.slug}`}>
                <Button variant="secondary" className="w-full p-1 h-min">
                  Read
                </Button>
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}