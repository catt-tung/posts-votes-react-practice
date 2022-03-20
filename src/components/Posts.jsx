import { getPosts } from "../services/api-calls";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
    .then(postsData => setPosts(postsData))
  }, [])
  
  return ( 
    <>
      <div className="postcard">
      {posts.map((post) => (
        <>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </>
        ))}
      </div>
    </>
  );
}

export default Posts;