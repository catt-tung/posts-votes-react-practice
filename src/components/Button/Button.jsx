import { useState } from "react";

const Button = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleClick1() {
    setCount1(count1 + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }

  return ( 
    <>
      <button onClick={handleClick1} id="upvote" className="btn btn-primary btn-sm">Upvoted {count1} times</button>
      <button id="downvote" onClick={handleClick2} className="btn btn-primary btn-sm">Downvoted {count2} times</button>
    </>
  );
}

export default Button;