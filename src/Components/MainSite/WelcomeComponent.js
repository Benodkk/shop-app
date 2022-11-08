import welcome1 from "../../Assets/welcome1.jpg";
import welcome2 from "../../Assets/welcome2.jpg";
import welcome3 from "../../Assets/welcome3.jpg";
import React, { useEffect, useState } from "react";

const images = [welcome1, welcome2, welcome3];

function WelcomeComponent() {
  // change photo

  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 8000);
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(0);
    }, 7500);
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      if (opacity == 0) {
        setOpacity(1);
      }
    }, 100);
  }, [index]);

  // sign transition

  const [style, setStyle] = useState({});
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    setStyle({
      transform: "translateY(0%)",
      opacity: 1,
    });
    setContainerStyle({
      opacity: 1,
    });
  }, []);

  return (
    <section className="welcomeSection">
      <div className="welcomeSectionContainer" style={containerStyle}>
        <img alt="Welcome" src={images[index]} style={{ opacity: opacity }} />
        <div className="welcomeSign" style={style}>
          Only top class products
        </div>
      </div>
    </section>
  );
}
export default WelcomeComponent;
