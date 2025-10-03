import ChessBlock from "./ChessBlock";
import "./chess.css";

const size = 8;

export default function Chess({ height = 500, width = 500 }) {
  const blockSize = Math.floor(height / size);
  return (
    <div style={{ height, width }} className="chess-container">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
        return (
          <div className="chess-row">
            <div className="chess-number">{9 - num}</div>
            <ChessBlock blockSize={blockSize} rowNum={num} />
          </div>
        );
      })}
      <div>
        {["a", "b", "c", "d", "e", "f", "g", "h"].map((alpha) => {
          return alpha;
        })}
      </div>
    </div>
  );
}
