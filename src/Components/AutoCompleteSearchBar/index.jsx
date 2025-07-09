import React, { useEffect, useState } from "react";

// enhancement
// key up and down to switch to the showRes value

const AutoComplete = () => {
  const [inputVal, setInputVal] = useState("");
  const [results, setResults] = useState([]);
  const [showRes, setShowRes] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timer);
  }, [inputVal]);

  const fetchData = async () => {
    if (cache[inputVal]) {
      console.log("cache returned");
      setResults(cache[inputVal]);
      return;
    }
    const data = await fetch(
      "https://dummyjson.com/recipes/search?q=" + inputVal
    );
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [inputVal]: json.recipes }));
  };

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onFocus={() => setShowRes(true)}
          onBlur={() => setShowRes(false)}
        />
        {showRes && (
          <div className="results-container">
            {results?.map((result) => (
              <span
                onClick={() => {
                  setInputVal(result.name);
                  setShowRes(false);
                }}
                className="result"
                key={result.id}
              >
                {result.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
