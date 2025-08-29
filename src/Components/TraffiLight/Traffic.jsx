import React, { useEffect, useState } from "react";
import Signal from "./Signal";

const Traffic = ({ lights = ["green", "yellow", "red"] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervelId = setInterval(() => {
      setActive((prev) => {
        return (prev + 1) % lights.length;
      });
    }, 2000);

    return () => {
      clearInterval(intervelId);
    };
  }, []);

  return (
    <>
      {lights.map((signal, index) => {
        return <Signal isActive={active === index} color={signal} />;
      })}
    </>
  );
};

export default Traffic;
