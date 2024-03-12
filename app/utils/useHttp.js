import { useState, useEffect } from "react";

function useHttp(url, method = "GET", payload = null) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(!url) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: payload ? JSON.stringify(payload) : null,
        });
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, payload]);
  return [loading, data, error];
}

export default useHttp;
