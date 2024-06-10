import React from "react";
import withFetch from "./HOC/withFetch";

const Data = ({ data, loading }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      UserId: {data?.userId}
      <br />
      Title: {data?.title}
    </div>
  );
};

export default withFetch(Data, "https://jsonplaceholder.typicode.com/posts/1");
