import React, { Component } from "react";
import _ from "lodash";
import propTypes from "prop-types";

class Pagination extends Component {
  state = {};
  render() {
    const { totalMovies, pageSize, pageSelected, onPageClick } = this.props;
    let count = Math.ceil(totalMovies / pageSize);
    let arr = _.range(0, count);

    return (
      <div className="d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            {totalMovies > 4 &&
              arr.map((index) => (
                <li
                  key={index}
                  className={
                    index * 4 === pageSelected
                      ? "page-item active"
                      : "page-item"
                  }
                >
                  <a
                    onClick={() => onPageClick(index)}
                    className="page-link"
                  >
                    {index + 1} <span className="sr-only">(current)</span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalMovies: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  pageSelected: propTypes.number.isRequired,
  onPageClick: propTypes.func.isRequired,
};

export default Pagination;
