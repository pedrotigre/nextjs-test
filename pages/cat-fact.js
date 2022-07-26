// import { useState, useEffect } from 'react';
import useSWR from 'swr';

function catFact() {
  // const [data, setData] = useState();

  //Instead of using useEffect and useState, we can use an Vercel hook called useSWR, that provides alot of cool stuffs and allow us to fetch data in a cleaner way.
  // useEffect(() => {
  //   fetch('https://catfact.ninja/fact')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setData(responseData);
  //     });
  // }, []);

  const { data, error } = useSWR('https://catfact.ninja/fact', (url) =>
    fetch(url).then((res) => res.json())
  );

  if (!data) return <p>Loading...</p>;

  return <div>{data.fact}</div>;
}

export default catFact;
