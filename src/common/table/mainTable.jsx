import React, { Component } from "react";
import TableBody from "../tableBody/tableBody";
import TableHeader from "../tableHeader/tableHeader";

class MainTable extends Component {
  render() {
    const { movies, start, end, onDelete, onSort, onFavourite, sortColumn,onNewMovie  } =
      this.props.allPropes;
    return (
      <table className="table">
        <TableHeader
          columns={this.props.column}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          movies={movies}
          start={start}
          end={end}
          onFavourite={onFavourite}
          onDelete={onDelete}
          onNewMovie={onNewMovie}
        />
      </table>
    );
  }
}

export default MainTable;
