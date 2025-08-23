"use client";

import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Rating } from "~/components/post";
import { Button } from "./button";
import Link from "next/link";

export default function CafeMap({ posts }: { posts: any[] }) {
  const [selectedPost, setSelectedPost] = useState<null | (typeof posts)[0]>(
    null,
  );

  return (
    <div className="map-container h-[500px] mb-4">
      <Map
        initialViewState={{
          latitude: -34.9285, // Default to Adelaide
          longitude: 138.6007,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken="pk.eyJ1IjoiZm9yYml0IiwiYSI6ImNtZTlhZGJ0eDBtbzYybXE0a2FqempsemMifQ.ghfgbxyGSY-fKtpkhktLgA"
		attributionControl={false}
      >
        {posts.map((post: any) => (
          <Marker
            key={post.slug}
            latitude={post.data.frontmatter.location[0]}
            longitude={post.data.frontmatter.location[1]}
            anchor="center"
            onClick={() => setSelectedPost(post)}
          >
            <div
              className="mapboxgl-marker"
              style={{
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                border: "2px solid white",
              }}
            />
          </Marker>
        ))}

        {selectedPost && (
          <Popup
            latitude={selectedPost.data.frontmatter.location[0]}
            longitude={selectedPost.data.frontmatter.location[1]}
            onClose={() => setSelectedPost(null)}
            closeOnClick={false}
            className="custom-popup"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">
                {selectedPost.data.frontmatter.title}
              </h3>
              <div className="flex flex-row gap-2 items-center">
                <time className="text-sm text-neutral-300">
                  {selectedPost.data.frontmatter.date}
                </time>
                <Rating
                  value={selectedPost.data.frontmatter.ratings.total}
                  className={`text-white`}
                />
              </div>
              <Link href={`/cafe/${selectedPost.slug}`}>
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
