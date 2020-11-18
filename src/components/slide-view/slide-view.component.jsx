import React, { useState,useEffect,useRef } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import Carousel from 'react-elastic-carousel';

import { SlideViewContainer } from "./slide-view.styles";

import SlideItem from '../slide-item/slide-item.component';

import {selectCollections} from '../../redux/collection/collection.selector';


const SlideView = ({collections})=>{
    let resetTimeout;
    const carouselRef= useRef(null);  
    return (
        <SlideViewContainer>
        <Carousel ref={carouselRef}enableAutoPlay={true} autoPlaySpeed={4000} onNextEnd={({index})=>{
            clearTimeout(resetTimeout)
            if(index===5){
                resetTimeout = setTimeout(()=>{
                    if(resetTimeout)
                    {
                        clearTimeout(resetTimeout);
                    }
                    try{
                    carouselRef.current.goTo(0);
                    }catch(error){
                        console.log(error.message);
                    }

                },4000)    
            }
        }}>
            {
                collections.slice(0,6).map(item=><SlideItem key={item.mal_id} item={item}></SlideItem>)
            }
        </Carousel>
        </SlideViewContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
})
export default connect(mapStateToProps)(SlideView)