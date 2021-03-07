import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

class Filter extends Component {
  static propTypes = {
    filterChange: PropTypes.func,
  };
  render() {
    const { filterChange } = this.props;
    const filterInput = shortid.generate();
    return (
      <>
        <label className={style.title} htmlFor={filterInput}>
          Find contacts by name
        </label>
        <input
          id={filterInput}
          type="text"
          onChange={(e) => {
            filterChange(e.target.value.toLowerCase());
          }}
          name="filter"
        ></input>
      </>
    );
  }
}

export default Filter;
