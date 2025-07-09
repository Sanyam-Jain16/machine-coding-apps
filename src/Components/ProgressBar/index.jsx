import React from "react";
import ProgressBarComponent from "./ProgressBarComponent";

const ProgressBar = () => {
  const bars = [1, 5, 20, 30, 55, 70, 80, 90, 100];
  return (
    <>
      <h1>ProgressBar</h1>
      {bars.map((bar) => (
        <ProgressBarComponent key={bar} progress={bar} />
      ))}
    </>
  );
};

export default ProgressBar;
