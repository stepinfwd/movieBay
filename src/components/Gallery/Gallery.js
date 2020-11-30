import React from "react";
import "./Gallery.css";

function Gallery({ gallery }) {
  console.log("GALLERY IS", gallery);
  return (
    <>
      <p className="castInfo_global_header">
          Gallery<span className="castInfo_global_header_span">Info</span>
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
              key={searchItem.id}
              // onClick={Modal}
            ></div>
          </>
        ))}
    </div>
    </>
  );
}

export default Gallery;
