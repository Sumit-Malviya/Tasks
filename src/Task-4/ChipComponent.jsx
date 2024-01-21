import { useState } from "react";

const list = [
  {
    id: 1,
    name: "Sumit",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Shaktiman",
  },
];

const ChipComponent = () => {
  const [mainList, setMainList] = useState(list);

  const [onFocus, setOnFocus] = useState(false);

  const [userInput, setUserInput] = useState("");

  const [adduser, setAddUser] = useState([]);

  const OnInputFocus = () => {
    const isActive = !onFocus;
    setOnFocus(isActive);
  };

  const OnInputChange = (e) => {
    const { value } = e.target; // value = e.target.value
    setUserInput(value);

    const UpdatedList = list.filter(
      (obj) => obj.name.toLowerCase().search(value.toLowerCase()) !== -1
    );

    setMainList(UpdatedList);
  };

  const OnNameClick = (id) => {
    const SelectedName = list.filter((obj) => obj.id === id);
    console.log("ln 45 selected names", SelectedName);
    setAddUser((prev) => [...prev, ...SelectedName]);

    setMainList((prev) => prev.filter((obj) => obj.id !== id));
  };

  const OnDelete = (id) => {
    setAddUser((prev) => prev.filter((obj) => obj.id !== id));
    const deletedName = adduser.find((obj) => obj.id === id);
    setMainList((prev) => [...prev, deletedName]);
  };

  console.log("ln 57 add user list:", adduser);

  return (
    <div>
      <h1>Pick User</h1>

      <hr />
      <div>
        {adduser.map((obj) => (
          <span
            key={obj.id}
            style={{
              margin: "4px",
              padding: "4px",
            }}
          >
            {obj.name}
            <button
              onClick={() => OnDelete(obj.id)}
              style={{
                width: "40px",
                height: "40px",
                padding: "4px",
                margin: "2px",
              }}
            >
              X
            </button>
          </span>
        ))}
        <input
          style={{ border: "none" }}
          placeholder="Add new user..."
          onFocus={OnInputFocus}
          // onBlur={() => setOnFocus(false)}
          onChange={OnInputChange}
          value={userInput}
        />
      </div>

      <hr />
      {onFocus && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {mainList.map((obj) => {
            return (
              <p onClick={() => OnNameClick(obj.id)} key={obj.id}>
                {obj.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChipComponent;
