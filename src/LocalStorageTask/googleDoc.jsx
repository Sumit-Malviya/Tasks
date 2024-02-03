import { useEffect } from "react";
import { useState } from "react";

const GoogleDoc = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });
  const onInputName = (e) => {
    // The purpose of using { ...prevDetails, name: e.target.value } is to create a new object that has all the properties of the existing details object and updates the name property with the new value.

    setDetails((prevDetails) => ({
      ...prevDetails,
      name: e.target.value,
    }));
  };

  const onInputEmail = (e) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      email: e.target.value,
    }));
  };

  const onInputSubmit = () => {
    const storedStrObj = localStorage.removeItem("strObj");
    setDetails({
      name: "",
      email: "",
    });
  };

  useEffect(() => {
    const storedStrObj = localStorage.getItem("strObj");
    if (storedStrObj) {
      const newObj = JSON.parse(storedStrObj);
      setDetails(newObj);
    }
  }, []);

  useEffect(() => {
    const strObj = JSON.stringify(details);
    localStorage.setItem("strObj", strObj);
  }, [details]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
      }}
    >
      <label>Full Name</label>
      <input type="text" onChange={onInputName} value={details.name} />
      <label>Email Address</label>
      <input type="email" onChange={onInputEmail} value={details.email} />
      <button onClick={onInputSubmit}>Submit</button>
    </div>
  );
};

export default GoogleDoc;
