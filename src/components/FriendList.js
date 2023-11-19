export function FriendList({ friendList, selectOperation, formId }) {
  return (
    <div>
      <ul>
        {friendList.map((friend) => (
          <Profile
            details={friend}
            key={friend.id}
            selectOperation={selectOperation}
            formId={formId}
          />
        ))}
      </ul>
    </div>
  );
}
function Profile({ details, selectOperation, formId }) {
  const selectedFlag = details.id === formId;
  return (
    <li className={selectedFlag ? "selected" : ""}>
      <img src={details.image} alt={details.name}></img>
      <h3> {details.name} </h3>
      <p className={details.balance < 0 ? "red" : "green"}> Balance = {details.balance}$ </p>
      <button className="button" onClick={() => selectOperation(details.id)}>
        {selectedFlag ? "Close" : "Select"}
      </button>
    </li>
  );
}
