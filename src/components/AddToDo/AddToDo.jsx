import React, { useState } from "react";

function AddToDo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add Your Next Todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          updateList(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddToDo;