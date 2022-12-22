import React from "react";
import Joi from "joi-browser";
import ReuseAbleForm from "./ReuseableForm";
import InputFeild from "./Input";
import InputFeildSelect from "./Input_select";

class NewMovieForm extends ReuseAbleForm {
  // const { match } = this.props;
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {  
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().integer().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    //server call
    console.log(this.state.data);
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
    // const { newMovie } = this.props.match.params;
    // newMovie("hayan");
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
        <h1>Movie Form</h1>
        <form onSubmit={this.handleForm}>
          {this.renderInput("title", "Title", "text")}
          <InputFeildSelect name="genre" value={this.state.data.genre} onChange={this.handleOnChange} error={this.state.errors.genre} />
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
export default NewMovieForm;
// import React from "react";
// import { useParams,useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import InputFeild from "./Input";
// import InputFeildSelect from "./Input_select";
// import Joi from "joi-browser";



// const NewMovieForm = () => {

//   const fun = {function: () => {console.log("ffgf")}}
//   console.log(fun);

//   const location = useLocation();
//   const dataProps  = location.state;
//   console.log(dataProps);
//   const [data, setData] = useState({ title: "", genre: "", numberInStock: "", rate: "" })
//   const [errors, setErrors] = useState({})
//   // const movie = useParams().movie;
//   // console.log(movie);
//   // const naviage = useNavigate();

//   // const handleFormSave= () =>{
//   //   naviage("/movies")
//   //   //to do
//   // }

//   const handleForm = (event) => {
//     event.preventDefault();
//     const errors = handleErrors();
//     setErrors(errors || {});
//     console.log(errors);
//     if (errors) return;
//     doSubmit();
//   };
 
//   const handleErrors = () => {
//         const { error } = Joi.validate(data, schema, {
//           abortEarly: false,
//         });
//         console.log(error);
//         if (!error) return null;
//         const errors = {};
//         for (let item of error.details) {
//           errors[item.path[0]] = item.message;
//         }
//         return errors;
//       };

//       const handleOnChange = ({ currentTarget: input }) => {
//         let newErrors = { ...errors };
//         let newMessage = handleOnSaveErrors(input);
//         if (newMessage) newErrors[input.name] = newMessage;
//         else delete newErrors[input.name];
//         let value = input.value;
//         let newData = { ...data };
//         newData[input.name] = value;
//         setData(newData);
//         setErrors(newErrors); 
//       };
    

//       const handleOnSaveErrors = ({ name, value }) => {
//         const toBeValidate = { [name]: value };
//         const OnSaveSchema = { [name]: schema[name] };
//         const { error } = Joi.validate(toBeValidate, OnSaveSchema);
//         console.log(error);
//         return error ? error.details[0].message : null;
//       };
//       const schema = {  
//         title: Joi.string().required().label("Title"),
//         genre: Joi.string().required().label("Genre"),
//         numberInStock: Joi.number()
//           .integer()
//           .min(0)
//           .max(100)
//           .required()
//           .label("Number in Stock"),
//         rate: Joi.number().integer().min(0).max(10).required().label("Rate"),
//       };
    
//      const  doSubmit = () => {
//         //server call
//         console.log(data);
//       };
    
//       const renderButton = (label) => {
//         return (
//           <button
//             disabled={handleErrors()}
//             onClick={handleForm}
//             className="btn btn-primary"
//           >
//             {label}
//           </button>
//         );
//       };
    
//       const renderInput = (name, label, type) => {
//         return (
//           <InputFeild
//             name={name}
//             label={label}
//             value={data[name]}
//             onChange={handleOnChange}
//             type={type}
//             error={errors[name]}
//           />
//         );
//       };
    
//   return (
//     <div className="container mt-5">
//         <h1>Movie Form</h1>
//         <form onSubmit={handleForm}>
//           {renderInput("title", "Title", "text")}
//           <InputFeildSelect name="genre" value={data.genre} onChange={handleOnChange} error={errors.genre} />
//           {renderInput("numberInStock", "Number In Stock", "number")}
//           {renderInput("rate", "Rate", "number")}
//           {renderButton("Save")}
//         </form>
//       </div>
//   );
// };

// export default NewMovieForm;
