import React, { useEffect } from "react";

import { connect } from "react-redux";

import { DetailContainer } from "./detail-page.styles";

import AnimeDetail from "../../components/anime-detail/anime-detail.component";

import { showRanking } from "../../redux/ranking/ranking.actions";
import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";
import {fetchItemStart} from '../../redux/item/item.actions';

const DetailPage = ({
  match,
  toggleSearchHidden,
  toggleDirectoryHidden,
  showRanking,
  fetchItemStart,
}) => {
  useEffect(() => {
    fetchItemStart(match.params.id);
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
    showRanking();
    console.log("asd");
  },[]);
  return (
    <DetailContainer>
      <AnimeDetail></AnimeDetail>
    </DetailContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
  showRanking: () => dispatch(showRanking()),
  fetchItemStart:(id)=>dispatch(fetchItemStart(id)),
});

export default connect(null, mapDispatchToProps)(DetailPage);
