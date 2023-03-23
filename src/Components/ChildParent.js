import React, { useState } from "react";

const ChildParent = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, value]);
    setValue(" ");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter Some text :
          <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <p>You Entered : {value}</p>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item} </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildParent;
