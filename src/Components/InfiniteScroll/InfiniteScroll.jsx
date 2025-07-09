import React, { useEffect, useState } from "react";
import Post from "./Post";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const fetchData = () => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setData((prev) => [...prev, ...arr]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <>
      <h1>InfiniteScroll</h1>
      <Post data={data} setPageNo={setPageNo} />
    </>
  );
};

export default InfiniteScroll;
