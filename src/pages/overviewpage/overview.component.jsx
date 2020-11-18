import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  BigContainer,
  OverviewContainer,
} from "./overview.styles";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";

const OverviewPage = ({
  match,
  location,
  toggleSearchHidden,
  toggleDirectoryHidden,
}) => {
  let type={};
   if(location.state===undefined)
    {
      if(match.params.genres)
      {

      }
      else if(match.params.status)
      {
        console.log(match.params.status);
        let Status = "";
        if(match.params.status==="ongoing")
        {
          Status="onGoing";
        }
        else if(match.params.status="finished")
        {
          Status="finished";
        }
        type={status:Status,
        pageNumber:parseInt(match.params.pagenumber)}
      }
      else if(match.params.year)
      {
         type={year:parseInt(match.params.year),
            pageNumber:parseInt(match.params.pagenumber)}
      }
      else if(match.params.season)
      {
         type={season:match.params.season,
            pageNumber:parseInt(match.params.pagenumber)}
      }
      else if(match.params.type)
      {
        let types = "";
        if(match.params.type==="tv"||match.params.type==="ona"||match.params.type==="ova")
        {
          types=match.params.type.toUpperCase();
        }
        else{
          types=match.params.type[0].toUpperCase()+match.params.type.substring(1);
        }
        type={type:types,
                  pageNumber:parseInt(match.params.pagenumber)}
      }
     else if(match.params.time)
    {
        let path = match.path.split('/');
      
        if(path[1]==="most-view")
        {
          type={mostview:match.params.time,
                pageNumber:parseInt(match.params.pagenumber)}
        }
        else if(path[1]==="most-like")
        {
          type={mostlike:match.params.time,
          pageNumber:parseInt(match.params.pagenumber)}
        }
    }

      else{
            type= {  for:"all",
               pageNumber:parseInt(match.params.pagenumber)}
      }

    }
    else{
    if(location.state.listname==="the loai")
    {
      type={genres:location.state.value,
            pageNumber:parseInt(match.params.pagenumber)}
    }
    
    else if(location.state.listname==="tv movie")
    {
         console.log(match.params);
      type={type:location.state.value,
              pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="nam")
    {
         console.log(match.params);
      type={year:location.state.value,
              pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="season")
    {
         console.log(match.params);
      type={season:location.state.value,
      pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="trang thai")
    {
         console.log(match.params);
      type={status:location.state.value,
               pageNumber:parseInt(match.params.pagenumber)}
    }
      else if(location.state.listname==="tim kiem")
    {
         console.log(location.state);
      type={keyword:location.state.value,
               pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="most view")
    {
      type={mostview:location.state.value,
          pageNumber:parseInt(match.params.pagenumber)}
    }
     else if(location.state.listname==="most like")
    {
      type={mostlike:location.state.value,
          pageNumber:parseInt(match.params.pagenumber)}
    }
      else
    {
         console.log(match.params);
      type= {   for:"all",
               pageNumber:parseInt(match.params.pagenumber)}
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
  });

  return (
    <BigContainer>
      <OverviewContainer>
        <CollectionOverview
        type={type}
        currentPage={match.params.pagenumber}
        url = {match.url}
        >
        </CollectionOverview>
      </OverviewContainer>
    </BigContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
});
export default connect(null, mapDispatchToProps)(OverviewPage);
