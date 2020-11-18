import React from "react";
import {createStructuredSelector} from 'reselect';
import { connect } from "react-redux";

import {
  SearchDropdownContainer,
  SearchDropdownList,
  SearchDropdownButton,
  SearchNotFound,
} from "./search-dropdown.styles";
import SearchItem from "../search-item/search-item.component";

import { selectSearchCollection } from "../../redux/collection/collection.selector";

const SearchDropdown = ({ searchCollection,searchText }) => {
  return (
    <SearchDropdownContainer>
      {searchCollection.length ? (
        <SearchDropdownList>
          {searchCollection.slice(0,6).map((item) => (
            <SearchItem key={item.mal_id} item={item}></SearchItem>
          ))}
        </SearchDropdownList>
      ) : (
        <SearchNotFound>Không tìm thấy kết quả phù hợp</SearchNotFound>
      )}
      <SearchDropdownButton
        to={{
          pathname: `tim-kiem/keyword=${searchText}/page/${1}`,
          state: { listname: "tim kiem", value: searchText },
        }}
      >
        Enter
      </SearchDropdownButton>
    </SearchDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchCollection: selectSearchCollection,
});

export default connect(mapStateToProps)(SearchDropdown);
