import React, { Component } from "react";
import Like from "../common/like/like";
import MainTable from "../common/table/mainTable";

class Table extends Component {
  column = [
    { title: "Title", path: "title" },
    { title: "Genre", path: "genre.name" },
    { title: "Stock", path: "numberInStock" },
    { title: "Rate", path: "dailyRentalRate" },
    { id: 1 },
    { id: 2 },
  ];

  render() {
    const { movies, start, end, onDelete, onSort, onFavourite, sortColumn } =
      this.props;
    return <MainTable allPropes={this.props} column={this.column} />;
  }
}

export default Table;
