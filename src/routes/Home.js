import React, { useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    const { 
      target: { value },
    } = e;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={nweet} type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="라이센스" />
      </form>
    </div>
  );
};

export default Home;