import React,{useEffect} from "react";
import { connect } from "react-redux";

import {createStructuredSelector} from "reselect";

import {
  CollectionOverviewContainer,
  CollectionTitle,
  CollectionTitleContainer,
  CollectionGrid,
  PageNumber,
  PageContainer,
  CurrentPage,
} from "./collection-overview.styles";


import AnimeItem from "../anime-item/anime-item.component";
import Spinner from "../spinner/spinner.component";

import {fetchCollectionOverviewStart} from '../../redux/collection/collection.actions';
import { selectCollections,isLoading,selectFirstDocument,selectLastDocument } from "../../redux/collection/collection.selector";



const CollectionOverview = React.memo(({loading,fetchCollectionOverviewStart,collections,type,url,currentPage}) => {
  useEffect(()=>{
      fetchCollectionOverviewStart(type);
  },[type])
  let urlArr = url.split('/');
  urlArr.splice(urlArr.length-1,1);
  let newUrl = urlArr.join('/');
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
      <PageContainer>
        {
          currentPage==1?null:<PageNumber to={{
        pathname: `${newUrl}/${parseInt(currentPage)-1}`,
      }}>{currentPage-1}</PageNumber>
        }
        <CurrentPage>{currentPage}</CurrentPage>
        <PageNumber to={{
        pathname: `${newUrl}/${parseInt(currentPage)+1}`,
      }}>{parseInt(currentPage)+1} </PageNumber>
      </PageContainer>
    </CollectionOverviewContainer>
  );
});

const mapStateToProps = createStructuredSelector({
  loading:isLoading,
  collections:selectCollections,
  firstDocument:selectFirstDocument,
  lastDocument:selectLastDocument,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCollectionOverviewStart: (types)=>dispatch(fetchCollectionOverviewStart(types))
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionOverview);
