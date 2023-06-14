import React from "react";
import "./FormWrapper.css";

const FormWrapper = (props) => {
  return (
    <div className={props.bordered ? "form-wrapper form-wrapper__bordered" : "form-wrapper"}>
      <div className="form">{props.children}</div>
    </div>
  );
};

export default FormWrapper;
