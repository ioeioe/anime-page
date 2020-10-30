import React,{useEffect} from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import {
  CollectionOverviewContainer,
  CollectionTitle,
  CollectionTitleContainer,
  CollectionGrid,
} from "./collection-overview.styles";

import AnimeItem from "../anime-item/anime-item.component";
import Spinner from "../spinner/spinner.component";

import {fetchCollectionOverviewStart} from '../../redux/collection/collection.actions';
import { selectCollections,isLoading } from "../../redux/collection/collection.selector";


const CollectionOverview = React.memo(({loading,fetchCollectionOverviewStart,collections,type}) => {
  useEffect(()=>{
    console.log(type);
      fetchCollectionOverviewStart(type);
  },[type])
  return loading?<Spinner />:
 (<CollectionOverviewContainer>
      <CollectionTitleContainer>
        <CollectionTitle>
          Danh sách anime mới nhất - anime vietsub online
        </CollectionTitle>
      </CollectionTitleContainer>
      <CollectionGrid>
        {collections.map((item) => (
          <AnimeItem key={item.mal_id} item={item}></AnimeItem>
        ))}
      </CollectionGrid>
    </CollectionOverviewContainer>
  );
});

const mapStateToProps = createStructuredSelector({
  loading:isLoading,
  collections:selectCollections,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCollectionOverviewStart: (types)=>dispatch(fetchCollectionOverviewStart(types))
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionOverview);
