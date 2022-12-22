import React, { Component } from "react";

class TableHeader extends Component {
  
  raiseSort = (sortname) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === sortname) {
      sortColumn.method = sortColumn.method === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = sortname;
      sortColumn.method = "asc";
    }
    this.props.onSort(sortColumn);
  };

  sortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.method === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((item) => (
            <th
              key={item.path || item.id}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(item.path)}
              scope="col"
            >
              {item.title} {this.sortIcon(item)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
