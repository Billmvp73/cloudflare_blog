import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "http://127.0.0.1:8787/api/posts", {
          method: "GET",
          headers: {'Content-Type': 'text/plain'}
        }
      );
      const postsResp = await resp.json();
      console.log("get all posts: ", await postsResp)
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
      
    </div>
  );
};

export default Posts;