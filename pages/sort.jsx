import React from "react";
import { Message } from "semantic-ui-react";

const sort = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(res.data);
  }, []);
}
  export const user1 = () => {
    <Message>
      <h1>Amy's To-Do List</h1>
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

  export const user2 = () => {
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
  export const user3 = () => {
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
  export const user4 = () => {
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
  export const user5 = () => {
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
  export const user6 = () => {
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
  export const user7 = () => {
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
  export const user8 = () => {
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
  export const user9 = () => {
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
  export const user10 = () => {
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


export default sort;
