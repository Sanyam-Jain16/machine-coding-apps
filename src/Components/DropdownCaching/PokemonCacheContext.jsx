import React, { createContext, useState, useContext } from "react";

const PokemonCacheContext = createContext();

export function PokemonCacheProvider({ children }) {
  const [cache, setCache] = useState({}); // { name: detailData }

  const saveToCache = (name, data) => {
    setCache((prev) => ({ ...prev, [name]: data }));
  };

  return (
    <PokemonCacheContext.Provider value={{ cache, saveToCache }}>
      {children}
    </PokemonCacheContext.Provider>
  );
}

export function usePokemonCache() {
  return useContext(PokemonCacheContext);
}
