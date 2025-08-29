import { useEffect, useState, useRef } from "react";
import data from "./data.json";

const DATA_LENGTH = data.length;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex == DATA_LENGTH - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
      }}
      className="img-carousel-container"
    >
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div onClick={handleNext} className="right-btn">
        {">"}
      </div>
    </div>
  );
}
