import { rest } from "lodash";
import React from "react";

const InputFeildSelect = ({name,value, onChange, error}) => {
  return (
    <div className="form-group">
      <label htmlFor="inputGroupSelect01">Genre</label>
      <select name={name} className="custom-select" id="inputGroupSelect01" value={value} onChange={onChange}>
      <option value=""></option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
      </select>
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default InputFeildSelect;
