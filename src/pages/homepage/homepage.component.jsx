import React, { useEffect, lazy } from "react";

import { connect } from "react-redux";
import { HomepageContainer } from "./homepage.styles";
//import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";

import SlideView from '../../components/slide-view/slide-view.component';

const CollectionPreview = lazy(() =>
  import("../../components/collection-preview/collection-preview.component")
);


const HomePage = ({
  toggleSearchHidden,
  toggleDirectoryHidden,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
  });
  return (
    <HomepageContainer>
      <SlideView />

      <CollectionPreview></CollectionPreview>
    </HomepageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
});

export default connect(null, mapDispatchToProps)(HomePage);
