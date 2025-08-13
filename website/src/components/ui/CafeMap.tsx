"use client";

import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function CafeMap({ posts }: { posts: any[] }) {
  const [selectedPost, setSelectedPost] = useState<null | typeof posts[0]>(null);

  return (
    <div style={{ height: "500px", marginBottom: "20px" }}>
      <Map
        initialViewState={{
          latitude: -34.9285, // Default to Adelaide
          longitude: 138.6007,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken="pk.eyJ1IjoiZm9yYml0IiwiYSI6ImNtZTlhZGJ0eDBtbzYybXE0a2FqempsemMifQ.ghfgbxyGSY-fKtpkhktLgA"
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
          >
            <div>
              <h3>{selectedPost.data.frontmatter.title}</h3>
              <p>Date: {selectedPost.data.frontmatter.date}</p>
              <p>Rating: {selectedPost.data.frontmatter.rating}</p>
              <a href={`/cafe/${selectedPost.slug}`}>Read</a>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
