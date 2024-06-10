import React, { useCallback, useEffect, useState } from "react";

const withFetch = (Element, url) => {
  const WithFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (url) => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    });

    useEffect(() => {
      fetchData(url);
    }, [url]);

    return <Element data={data} loading={loading} error={error} />;
  };

  return WithFetch;
};

export default withFetch;
