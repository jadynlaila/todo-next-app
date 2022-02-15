import React, { useState, useEffect } from "react";
import axios from "axios";
import { Message } from "semantic-ui-react";
import Sort from './sort'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(res.data);
  }, []);

  return (
    <>
      <Sort />
    </>
  );
};

export default Home;
