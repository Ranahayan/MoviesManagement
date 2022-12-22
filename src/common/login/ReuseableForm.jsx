import React, { Component } from "react";
import Joi from "joi-browser";


class ReuseAbleForm extends Component {
    state = { 
        data: {},
        errors: {}
     } 


  handleForm = (event) => {
    event.preventDefault();
    const errors = this.handleErrors();
    this.setState(errors || {});
    console.log(errors);
    if (errors) return;
    this.doSubmit();
  };
 
     handleErrors = () => {
        const { error } = Joi.validate(this.state.data, this.schema, {
          abortEarly: false,
        });
        console.log(error);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
          errors[item.path[0]] = item.message;
        }
        return errors;
      };

      handleOnChange = ({ currentTarget: input }) => {
        let errors = { ...this.state.errors };
        let newMessage = this.handleOnSaveErrors(input);
        if (newMessage) errors[input.name] = newMessage;
        else delete errors[input.name];
        let value = input.value;
        let data = { ...this.state.data };
        data[input.name] = value;
        this.setState({ data, errors });
      };
    

      handleOnSaveErrors = ({ name, value }) => {
        const toBeValidate = { [name]: value };
        const OnSaveSchema = { [name]: this.schema[name] };
        const { error } = Joi.validate(toBeValidate, OnSaveSchema);
        console.log(error);
        return error ? error.details[0].message : null;
      };
}
 
export default ReuseAbleForm;