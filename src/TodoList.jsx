import React, { useState } from "react";
import "./Style.css";

function TodoList() {
  // Use the useState hook to create state variables for the list of to-do items and the current value of the input field
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  console.log(items);
  // Add a new to-do item when the submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    } else {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  // Update the value of the input field when the user types in it
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Remove an item from the to-do list when the delete button is clicked
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // Edit an item in the to-do list when the edit button is clicked
  const handleEdit = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  // Render the to-do list and form elements in the component's JSX
  return (
    <div className="todo">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            placeholder="what's the plan today?"
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="items">
          {items.map((item, index) => (
            <li key={index}>
              <div className="container">
                <div className="item">
                  <p>{item}</p>
                </div>
                <div className="button">
                  <button
                    className="edit"
                    onClick={() => handleEdit(index, prompt("Edit item:"))}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    &#10008;
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
