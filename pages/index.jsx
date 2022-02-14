import React, { useState, useEffect } from "react";
import axios from "axios";
import { Message } from "semantic-ui-react";
import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
} from "./sort";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(res.data);
  }, []);

  return (
    <>
      <user1/>
    </>
  );
};

export default Home;
