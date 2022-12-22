import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import InputFeild from "./Input";
import InputFeildSelect from "./Input_select";
import Joi from "joi-browser";
import { getGenres } from '../fakeGenreService';
import { useEffect } from "react";
import { getMovie, saveMovie } from "../../Movies/fakeMovieService";



const MovieForm = () => {

  const [data, setData] = useState({ title: "", genreId: "", numberInStock: "", dailyRentalRate: "" })
  const [errors, setErrors] = useState({})
  const [genres, setGenres] = useState([])  
  const movie = useParams().movie;

  console.log(movie);
  const naviage = useNavigate();


  useEffect(() => {
    const newGeners = getGenres();
    setGenres(newGeners);

    console.log(movie);
    if (movie === "new") return;
    const gottenMovie = getMovie(movie);

    console.log(gottenMovie);

    if (!gottenMovie) return naviage("/not-found", {replace: true});

    setData(mapToViewModel(gottenMovie));

  },[]);

  const mapToViewModel = (movie) => {
    return {
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      favourite: false
    }
  }

  const handleForm = (event) => {
    event.preventDefault();
    const errors = handleErrors();
    setErrors(errors || {});
    console.log(errors);
    if (errors) return;
    doSubmit();
  };
 
  const handleErrors = () => {
        const { error } = Joi.validate(data, schema, {
          abortEarly: false,
        });
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
          errors[item.path[0]] = item.message;
        }
        return errors;
      };

      const handleOnChange = ({ currentTarget: input }) => {
        let newErrors = { ...errors };
        let newMessage = handleOnSaveErrors(input);
        if (newMessage) newErrors[input.name] = newMessage;
        else delete newErrors[input.name];
        let value = input.value;
        let newData = { ...data };
        newData[input.name] = value;
        setData(newData);
        setErrors(newErrors); 
      };
    

      const handleOnSaveErrors = ({ name, value }) => {
        const toBeValidate = { [name]: value };
        const OnSaveSchema = { [name]: schema[name] };
        const { error } = Joi.validate(toBeValidate, OnSaveSchema);
        console.log(error);
        return error ? error.details[0].message : null;
      };
      const schema = {  
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number()
          .integer()
          .min(0)
          .max(100)
          .required()
          .label("Number in Stock"),
        dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
      };
    
     const  doSubmit = () => {
        let newData = data;
        newData.favourite = false;
      console.log(newData);
        saveMovie(newData);
        naviage("/movies")
      };
    
      const renderButton = (label) => {
        return (
          <button
            disabled={handleErrors()}
            onClick={handleForm}
            className="btn btn-primary"
          >
            {label}
          </button>
        );
      };
    
      const renderInput = (name, label, type) => {
        return (
          <InputFeild
            name={name}
            label={label}
            value={data[name]}
            onChange={handleOnChange}
            type={type}
            error={errors[name]}
          />
        );
      };
    
  return (
    <div className="container mt-5">
        <h1>Movie Form{movie}</h1>
        <form onSubmit={handleForm}>
          {renderInput("title", "Title", "text")}
          <InputFeildSelect name="genreId" value={data.genreId} onChange={handleOnChange} error={errors.genre} options={genres} />
          {renderInput("numberInStock", "Number In Stock", "number")}
          {renderInput("dailyRentalRate", "Rate", "number")}
          {renderButton("Save")}
        </form>
      </div>
  );
};

export default MovieForm;
