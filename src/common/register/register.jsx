import React from "react";
import Joi from "joi-browser";
import InputFeild from "./Input";
import ReuseAbleForm from "./ReuseableForm";

class Register extends ReuseAbleForm {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };
  // const [data, setAccount] = useState({ username: "", password: "" });
  // const [errors, setErrors] = useState({});

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().min(4).required().label("Name"),
  };

  doSubmit = () => {
    //server call
    console.log("submitted");
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.handleErrors()}
        onClick={this.handleForm}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type) => {
    const { data, errors } = this.state;
    return (
      <InputFeild
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleOnChange}
        type={type}
        error={errors[name]}
      />
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>Register</h1>
        <form onSubmit={this.handleForm}>
          {this.renderInput("email", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "text")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
