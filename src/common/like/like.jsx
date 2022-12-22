import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <div>
        {this.props.movies.favourite === false ? (
          <i
            onClick={() => this.props.onHeartClick(this.props.movies)}
            className="fa fa-heart-o"
            style={{ cursor: "pointer" }}
            aria-hidden="true"
          ></i>
        ) : (
          <i
            onClick={() => this.props.onHeartClick(this.props.movies)}
            className="fa fa-heart"
            style={{ cursor: "pointer" }}
            aria-hidden="true"
          ></i>
        )}
      </div>
    );
  }
}

export default Like;
