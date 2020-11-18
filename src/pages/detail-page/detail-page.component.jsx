import React, { useEffect } from "react";

import { connect } from "react-redux";

import { DetailContainer } from "./detail-page.styles";

import AnimeDetail from "../../components/anime-detail/anime-detail.component";
import AnimeDetailMap from "../../components/anime-detail-map/anime-detail-map.component";

import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";

const DetailPage = ({
  match,
  toggleSearchHidden,
  toggleDirectoryHidden,
  location
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
  });
 
  return (
    <DetailContainer>
      {
      !location.state?(<AnimeDetail id={match.params.id}></AnimeDetail>):
      (<AnimeDetailMap item={location.state.item}></AnimeDetailMap>)
      }
    </DetailContainer>
  );
}


const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
});

export default connect(null, mapDispatchToProps)(DetailPage)
