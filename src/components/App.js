import { useState } from "react";
import "./App.css";
import { FriendForm } from "./FriendForm";
import { FriendList } from "./FriendList";
import { SplitForm } from "./SplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [splitFormOpenId, setSplitFormOpenId] = useState(null);

  function handleAddFriend(details) {
    setFriendList((list) => [...list, details]);
  }

  function handleSplitFormToggle(id) {
    setSplitFormOpenId((curr) => (curr === id ? null : Number(id)));
  }

  function handleSplitCalc(bal) {
    setFriendList(
      friendList.map((obj) =>
        obj.id === splitFormOpenId ? { ...obj, balance: obj.balance + bal } : obj
      )
    );

    setSplitFormOpenId(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          selectOperation={handleSplitFormToggle}
          formId={splitFormOpenId}
        />
        <FriendForm onSubmit={handleAddFriend} />
      </div>
      {splitFormOpenId !== null && (
        <SplitForm
          obj={friendList.find((value) => value.id === splitFormOpenId)}
          onSplitAction={handleSplitCalc}
        />
      )}
    </div>
  );
}
