import { getPosts } from "../services/api-calls";
import { useState, useEffect } from "react";
import Button from "./Button/Button";

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
    .then(postsData => setPosts(postsData))
  }, [])
  
  return ( 
    <>
      
      {posts.map((post) => (
        <>
          <div className="card">
            <div className="card-header">
              <h5>{post.title}</h5>
            </div>
            <div className="card-text">
              <p>{post.body}</p>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </>
        ))}
      
    </>
  );
}

export default Posts;