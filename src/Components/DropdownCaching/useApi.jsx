import { useState, useEffect } from "react";

function useApi(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // don’t run if url is null

    let isMounted = true;
    setLoading(true);

    fetch(url, options)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        if (isMounted) setData(result);
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
  }, [url, options]);

  return { data, loading, error };
}

export default useApi;
