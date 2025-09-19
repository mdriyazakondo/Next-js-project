import React from "react";

export const singlePosts = async (posts_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${posts_id}`
  );
  const data = res.json();
  return data;
};

const page = async ({ params }) => {
  const id = params.id;
  const postsData = await singlePosts(id);
  return (
    <div>
      <h2>all data</h2>
      <p>id: {id}</p>
      <h3>{postsData.title}</h3>
      <p>{postsData.body}</p>
    </div>
  );
};

export default page;
