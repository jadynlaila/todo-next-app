import { Message } from "semantic-ui-react";
import { useState, useEffect } from "react";



//!need to remove export from before all the functions and instead use module.export
const sort = () => {
  const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const names =[brandon]

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(res.data);
  }, []);

  const user1 = () => {
    return (
      <Message>
        <h1>Amy's To-Do List</h1>
        {/* {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })} */}
      </Message>
    );
  };

  const user2 = () => {
    <Message>
      <h1>{`${names[userId-1]}'s To-Do List`}</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user3 = () => {
    <Message>
      <h1>Chey's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user4 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user5 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user6 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user7 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user8 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user9 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
  const user10 = () => {
    <Message>
      <h1>Brandon's To-Do List</h1>
      {posts.map((post) => {
        const { title, id, completed } = posts;
        if (completed) {
          return (
            <Message key={id} color={completed ? { red } : { green }}>
              <div>{title}</div>
            </Message>
          );
        }
      })}
    </Message>;
  };
};

module.exports = {user1, user2, user3}