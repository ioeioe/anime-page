import React,{useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    IncomingContainer,
    IncomingTitle,
    IncomingItemContainer
} from "./incoming.styles";

import Carousel from 'react-elastic-carousel';
import IncomingItem from '../incoming-item/incoming-item.component';

import {selectIncomingCollection,isIncomingloading} from '../../redux/collection/collection.selector';
import {fetchIncomingStart} from '../../redux/collection/collection.actions';

const Incoming = ({ fetchIncomingStart,incomingCollection,loading }) => {
    
   
  useEffect(()=>{
      fetchIncomingStart();
  },[])
  console.log("asd");
  return loading?null:(
    <IncomingContainer>
        <IncomingTitle>ANIME PHÁT SÓNG MÙA SAU</IncomingTitle>
    <IncomingItemContainer>
        <Carousel  itemsToShow={6} itemsToScroll={2} >
        {incomingCollection.map(item=><IncomingItem key={item.mal_id}item={item}></IncomingItem>)}
        </Carousel>
    </IncomingItemContainer>
    </IncomingContainer>)
};

const mapStateToProps = createStructuredSelector({
    incomingCollection:selectIncomingCollection,
    loading:isIncomingloading,
});

const mapDispatchToProps = (dispatch)=>({
    fetchIncomingStart:()=>dispatch(fetchIncomingStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Incoming);
