import React from "react";
import "./Gallery.css";

function Gallery({ gallery }) {
  return (
    <>
      <p className="castInfo-global-header">
        Gallery<span className="castInfo-global-header-span">Info</span>
      </p>
      <div className="image-block-container" style={{ marginTop: "30px" }}>
        {gallery &&
          gallery.map((searchItem) => (
            <>
              <div
                className="search-image"
                key={searchItem.id}
                style={{
                  backgroundImage: `url(${searchItem.resolutions.original.url})`,
                }}
                alt=""
              ></div>
            </>
          ))}
      </div>
    </>
  );
}

export default Gallery;
