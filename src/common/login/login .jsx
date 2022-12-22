import React from "react";
import Joi from "joi-browser";
import InputFeild from "./Input";
import ReuseAbleForm from "./ReuseableForm";

class Login extends ReuseAbleForm {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  // const [data, setAccount] = useState({ username: "", password: "" });
  // const [errors, setErrors] = useState({});

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  
  doSubmit = () => {
    //server call
    console.log("submitted");
  }
 
  renderButton = (label) => {
  return  <button
            disabled={this.handleErrors()}
            onClick={this.handleForm}
            className="btn btn-primary"
          >
            {label}
          </button>
  }

  renderInput = (name,label, type) => {
    const { data, errors } = this.state;
    return <InputFeild
    name={name}
    label={label}
    value={data[name]}
    onChange={this.handleOnChange}
    type={type}
    error={errors[name]}
  />
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Login</h1>
        <form onSubmit={this.handleForm}>
          {this.renderInput("username","Username","text")}
        {this.renderInput("password","Password","password")}  
        {this.renderButton("Login")}
          
        </form>
      </div>
    );
  }
}

export default Login;
