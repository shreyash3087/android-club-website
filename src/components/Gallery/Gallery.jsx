import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Gallery() {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNextClick = () => {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    const handleTouchStart = (event) => {
      touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.current && touchEndX.current) {
        if (touchStartX.current - touchEndX.current > 50) {
          handleNextClick();
        } else if (touchStartX.current - touchEndX.current < -50) {
          handlePrevClick();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="gallery_container">
      <div className="slide">
        <div
          className="item"
          style={{ backgroundImage: "url(/Events_Page/DSA_Tussle/img4.jpg)" }}
        ></div>
        <div
          className="item"
          style={{
            backgroundImage: "url(/Events_Page/Meet_and_Greet/img1.jpg)",
          }}
        >
          <div className="content">
            <div className="name">Meet and Greet</div>
            <div className="des">
              Android Club hosted a spectacular Meet & Greet session for the
              Batch of 2023, and it was a resounding success!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: "url(/Events_Page/Meet_and_Greet/img2.jpg)",
          }}
        ></div>
        <div
          className="item"
          style={{
            backgroundImage: "url(/Events_Page/Meet_and_Greet/img3.jpg)",
          }}
        ></div>
        <div
          className="item"
          style={{ backgroundImage: "url(/Events_Page/DSA_Tussle/img1.jpg)" }}
        >
          <div className="content">
            <div className="name">DSA Tussle</div>
            <div className="des">
              An exhilarating day of coding brilliance at DSA Tussle hosted by
              Android Club!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/Events_Page/DSA_Tussle/img2.jpg)" }}
        ></div>
        <div
          className="item"
          style={{ backgroundImage: "url(/Events_Page/DSA_Tussle/img3.jpg)" }}
        ></div>
      </div>

      <div className="button">
        <button className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
