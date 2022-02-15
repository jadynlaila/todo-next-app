import { Message } from "semantic-ui-react";
import { useState, useEffect } from "react";
import axios from "axios";


const Sort = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(res.data);
  }, []);

  let users = ['Amy', 'Brandy', 'Cindy', 'Dave', 'Ethan', 'Faith', 'George', 'Hillary', 'Isaac', 'Jake'];


  console.log(posts);
    return (
      <Message>
        <h1>{posts.userId}</h1>
        {posts.map((post) => {
          const { title, id, completed } = posts;
            return (
              <Message key={id}>
                <div>{title}</div>
              </Message>
            );
        })}
      </Message>
    );
};

module.exports = Sort 