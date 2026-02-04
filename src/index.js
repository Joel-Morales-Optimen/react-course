import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/usuario1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/usuario2",
  },
  {
    id: 2,
    name: "Luis",
    image: "https://robohash.org/usuario3",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>,
);
