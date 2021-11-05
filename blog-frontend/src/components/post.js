import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `http://127.0.0.1:8787/api/posts/${id}`
      );
      const postResp = await resp.json();
      console.log(await postResp)
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p> <p>{post.username}</p>
      {/* <p>
        <em>Published {new Date(post.published_at).toLocaleString()}</em>
      </p> */}
      <p>
        <Link to="/posts">Go back</Link>
      </p>
    </div>
  );
};

export default Post;