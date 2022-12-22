import { rest } from "lodash";
import React from "react";

const InputFeild = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default InputFeild;
