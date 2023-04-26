import React from "react";
import "./FormWrapper.css";

const FormWrapper = (props) => {
  return (
    <div className="form-wrapper">
      <div className="form">{props.children}</div>
    </div>
  );
};

export default FormWrapper;
