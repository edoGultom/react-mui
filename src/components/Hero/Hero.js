import React from "react";
import banner from "../../images/banner.jpg";
import "../../styles/HeroStyles.css";

export default function Hero() {
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="heroTitle">
          <h1>LEARN THE DRUMS</h1>
        </div>
      </div>
      <div className="titleClass">
        <h1>Drummer Class</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
}
