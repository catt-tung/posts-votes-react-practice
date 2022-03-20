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
      <button onClick={handleClick1}>Upvoted {count1} times</button>
      <button onClick={handleClick2}>Downvoted {count2} times</button>
    </>
  );
}

export default Button;