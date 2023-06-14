import React from "react";
import "./DeleteButton.css"

const DeleteButton = ({ action }) => {
  return (
    <button className="button button-delete" onClick={action}>
      
    </button>
  );
};

export default DeleteButton;
