import React, { Component } from "react";
import ListGroup from "../common/groupList/groupList";
import Like from "../common/like/like";
import Pagination from "../common/pagination/pagination";
import Table from "../Table/table";
import { getMovies } from "./fakeMovieService";
import _ from "lodash";
import { Link } from "react-router-dom";

class Train extends Component {
  state = {
    movies: [],
    pageSize: 4,
    start: 0,
    end: 4,
    genreName: "All Geners",
    searchQuery: "",
    sortColumn: { path: "title", method: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleGener = (name) => {
    this.setState({ genreName: name, start: 0, end: 4 });
    this.setState({ searchQuery: "" });
  };

  handleFavourite = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movie };
    if (movies[index].favourite === true) {
      movies[index].favourite = false;
    } else {
      movies[index].favourite = true;
    }
    this.setState({ movies });
  };

  handleRange = (decider) => {
    let start = decider * 4;
    let end = start + 4;
    this.setState({ start: start, end: end });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleRenderStatements = () => {
    let filtered;
    if (this.state.searchQuery === "") {
      filtered =
        this.state.genreName === "All Geners"
          ? this.state.movies
          : this.state.movies.filter(
              (movie) => movie.genre.name === this.state.genreName
            );
    } else {
      filtered = this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    }

    let sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.method]
    );
    return sorted;
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value, start: 0, end: 4 });
  };

  render() {
    let sorted = this.handleRenderStatements();    console.log(sorted);
    return (
      <div className="container m-5">
        {this.state.movies.length !== 0 ? (
          <div className="row">
            <div className="col-2">
              <ListGroup
                onGenere={this.handleGener}
                genrename={this.state.genreName}
                searchQuery={this.state.searchQuery}
              />
            </div>
            <div className="col-10">
              <Link
                to={"/movies/new"}
                data={{ myfunction: this.handleNewMovie }}
                className="btn btn-primary"
              >
                New Movie
              </Link>
              <p>Showing {sorted.length} movies from the database </p>
              <div className="form-group">
                <input
                  value={this.state.searchQuery}
                  onChange={this.handleSearch}
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
              <Table
                movies={sorted}
                start={this.state.start}
                end={this.state.end}
                onDelete={this.hanndleDeleteMovie}
                onFavourite={this.handleFavourite}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
              />
              <Pagination
                pageSize={this.state.pageSize}
                totalMovies={sorted.length}
                onPageClick={this.handleRange}
                pageSelected={this.state.start}
              />
            </div>
          </div>
        ) : (
          <p>There are no movies in DataBase</p>
        )}
      </div>
    );
  }

  hanndleDeleteMovie = (movieID) => {
    let Movies = this.state.movies;
    let index = Movies.findIndex((movie) => movie._id === movieID);
    Movies.splice(index, 1);
    this.setState({ movies: Movies });
    //Alternate
    // let Movies = this.state.movies.filter(m => m._id !== movieID);
    // this.setState({movies: Movies});
  };
}

export default Train;
