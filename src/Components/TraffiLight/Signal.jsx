const Signal = ({ color, isActive }) => {
  return (
    <div
      className="signal"
      style={{ backgroundColor: isActive ? color : "grey", margin: "20px" }}
    ></div>
  );
};

export default Signal;
