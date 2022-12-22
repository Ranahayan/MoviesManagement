import React, { Component } from "react";
import { getGenres } from "../../Movies/fakeGenreService";

class ListGroup extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.geners = getGenres();
  }
  func = () => {
    if (this.props.searchQuery === "")
    return "list-group-item active"
    else return "list-group-item"
  }
  activeClass = this.props.searchQuery === "" ? "list-group-item active" : "list-group-item"; 
  render() {
    console.log(this.props.searchQuery);
    console.log(this.func());
    return (
      <ul className="list-group">
        <li
          className={
            this.props.genrename === "All Geners"
              ? this.func()
              : "list-group-item"
          }
          aria-current="true"
        >
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.props.onGenere("All Geners")}
          >
            All Geners
          </a>
        </li>
        {this.state.geners.map((item) => (
          <li
            key={item._id}
            className={
              this.props.genrename === item.name
                ? this.func()
                : "list-group-item"
            }
            aria-current="true"
          >
            <a
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onGenere(item.name)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
