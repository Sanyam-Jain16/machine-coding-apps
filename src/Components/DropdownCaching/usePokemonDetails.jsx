import { useState, useEffect } from "react";
import { usePokemonCache } from "./PokemonCacheContext";

function usePokemonDetail(name) {
  const { cache, saveToCache } = usePokemonCache();
  const [data, setData] = useState(cache[name] || null);
  const [loading, setLoading] = useState(!cache[name]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;
    if (cache[name]) {
      setData(cache[name]);
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        if (isMounted) {
          setData(result);
          saveToCache(name, result); // ✅ save in cache
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [name, cache, saveToCache]);

  return { data, loading, error };
}

export default usePokemonDetail;
