import React, { Component } from "react";
import Like from "../like/like";
import { Link } from 'react-router-dom';

class TableBody extends Component {
  render() {
    const { movies, start, end, onDelete, onFavourite } = this.props;
    return (
      <tbody>
        {movies.slice(start, end).map((movies) => (
          <tr key={movies._id}>
            <td><Link to={"/movies/" + movies._id}>{movies.title}</Link></td>
            <td>{movies.genre.name}</td>
            <td>{movies.numberInStock}</td>
            <td>{movies.dailyRentalRate}</td>
            <td>
              <Like movies={movies} onHeartClick={onFavourite} />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(movies._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
