import React from "react";
import "./Gallery.css";

function Gallery({ gallery }) {
  console.log("GALLERY IS", gallery);
  return (
    <div className="image-block-container" style={{ marginTop: "30px" }}>
      {gallery &&
        gallery.map((searchItem) => (
          <>
            <div
              className="search-image"
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
  );
}

export default Gallery;
