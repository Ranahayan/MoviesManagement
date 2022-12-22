import React from "react";

const InputFeild = ({ name, label, value, onChange, type, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default InputFeild;
