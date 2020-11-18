import React,{useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CollectionPreviewContainer,
  CollectionTitleContainer,
  CollectionTitle,
  CollectionGrid,
  ViewmoreContainer,
  Viewmore,
} from "./collection-preview.styles";

import Spinner from "../spinner/spinner.component";
import AnimeItem from "../anime-item/anime-item.component.jsx";

import { fetchCollectionPreviewStart } from "../../redux/collection/collection.actions";
import { selectCollections,isLoading } from "../../redux/collection/collection.selector";

const CollectionPreview = ({ collections,fetchCollectionPreviewStart,loading }) => {
  useEffect(()=>{
    fetchCollectionPreviewStart();
  },[])
  return loading?<Spinner />:
    (
      <CollectionPreviewContainer>
      <CollectionTitleContainer>
        <CollectionTitle>Anime mới cập nhật</CollectionTitle>
      </CollectionTitleContainer>
      <CollectionGrid>
        {collections.map((item) => (
          <AnimeItem key={item.mal_id} item={item} routeName={item.routeName}></AnimeItem>
        ))}
      </CollectionGrid>
      <ViewmoreContainer>
        <Viewmore
          to={{
            pathname: "danh-sach/page/1",
            state: { listname: "danh sach"},
          }}
        >
          Xem thêm
        </Viewmore>
      </ViewmoreContainer>
    </CollectionPreviewContainer>
    )
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  loading:isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionPreviewStart: () => dispatch(fetchCollectionPreviewStart()),
});
export default connect(mapStateToProps,mapDispatchToProps)(CollectionPreview);
