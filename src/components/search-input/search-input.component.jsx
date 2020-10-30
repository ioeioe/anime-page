import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import searchlogo from "../../images-source/search-logo.png";
import { SearchContainer, SearchLogo, SearchBar } from "./search-input.styles";

import SearchDropdown from "../search-dropdown/search-dropdown.component";

import {
  selectSearchHidden,
} from "../../redux/search/search.selectors";
import {
  ShowDropdown,
  toggleSearchHidden,
} from "../../redux/search/search.actions";

import {fetchSearchStart} from '../../redux/collection/collection.actions';

const SearchInput = ({
  searchHidden,
  ShowDropdown,
  toggleSearchHidden,
  fetchSearchStart,
  history,
}) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };
  const enterEvent = (event) => {
    if (event.key === "Enter") {
      if (searchText.length >= 3) {
        history.push({
          pathname: `tim-kiem/keyword=${searchText}/page/${1}`,
          state: { listname: "tim kiem", name: searchText },
        });
      }
    }
  };
  useEffect(() => {
    if (searchText.length >= 3) {
      fetchSearchStart(searchText);
      ShowDropdown();
    } else {
      toggleSearchHidden();
    }
  }, [searchText]);
  return (
    <SearchContainer>
      <SearchBar
        name="searchText"
        type="search"
        value={searchText}
        onChange={handleChange}
        placeholder="tìm kiếm tên anime..."
        onKeyDown={enterEvent}
      ></SearchBar>
      <SearchLogo
        src={searchlogo}
        alt="search logo"
        onClick={() => {
          history.push({
            pathname: `tim-kiem/keyword=${searchText}/page/${1}`,
            state: { listname: "tim kiem", name: searchText },
          });
        }}
      ></SearchLogo>
      {searchHidden ? null : (
        <SearchDropdown
          searchText={searchText}
        ></SearchDropdown>
      )}
    </SearchContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchHidden: selectSearchHidden,
});

const mapDispatchToProps = (dispatch) => ({
  ShowDropdown: () => dispatch(ShowDropdown()),
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  fetchSearchStart:(keyword)=>dispatch(fetchSearchStart(keyword)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchInput)
);
