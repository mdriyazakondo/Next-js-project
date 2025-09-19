import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};

const page = async () => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-8 max-w-[1800px] mx-auto mt-8">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>Show More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
