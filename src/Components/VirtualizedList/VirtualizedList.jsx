import { useMemo, useState } from "react";

const VirtualizedList = ({ list, height, itemHeight, width }) => {
  const defaultHeight = Math.floor(height / itemHeight);
  const [indices, setIndices] = useState([0, defaultHeight]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + defaultHeight;
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleItems = useMemo(() => {
    return list.slice(indices[0], indices[1] + 1);
  }, [indices, list]);

  return (
    <div
      style={{
        height,
        width,
        background: "grey",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleItems.map((item, index) => {
          return (
            <div
              style={{
                height: itemHeight,
                background: "coral",
                borderTop: "2px solid grey",
                // we can do this from translate as well for better performance
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
              }}
              key={item}
            >
              {"Item" + item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;
