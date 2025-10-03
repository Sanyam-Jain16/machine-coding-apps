export default function ChessBlock({ blockSize, rowNum }) {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
    const oddOrEven = (rowNum + num) % 2;
    const finalClass = oddOrEven ? "chess-block-green" : "chess-block-red";
    return (
      <div
        key={num}
        style={{ height: blockSize, width: blockSize }}
        className={finalClass}
      />
    );
  });
}
