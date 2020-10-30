import React, { useEffect, lazy } from "react";

import { connect } from "react-redux";
import { showRanking } from "../../redux/ranking/ranking.actions";
import { HomepageContainer } from "./homepage.styles";
//import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";

const CollectionPreview = lazy(() =>
  import("../../components/collection-preview/collection-preview.component")
);

const HomePage = ({
  toggleSearchHidden,
  toggleDirectoryHidden,
  showRanking,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
    showRanking();
  });
  return (
    <HomepageContainer>
      <CollectionPreview></CollectionPreview>
    </HomepageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
  showRanking: () => dispatch(showRanking()),
});

export default connect(null, mapDispatchToProps)(HomePage);
