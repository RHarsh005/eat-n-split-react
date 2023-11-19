import { useState } from "react";

export function FriendForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function addFriend(e) {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      name: name,
      image: url,
      balance: 0,
    };
    onSubmit(obj);
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => addFriend(e)}>
      <h3>Friend Name: </h3>
      <input
        type="text"
        value={name}
        placeholder="NAME"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h3>image url: </h3>
      <input
        type="text"
        value={url}
        placeholder="IMG URL"
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button className="button">Add</button>
    </form>
  );
}
