import React, { useEffect } from "react";
import { connect } from "react-redux";

import { toggleSearchHidden } from "../../redux/search/search.actions";
import { toggleDirectoryHidden } from "../../redux/directory/directory.actions";
import { showRanking } from "../../redux/ranking/ranking.actions";
import {
  BigContainer,
  OverviewContainer,
  PageContainer,
  CurrentPage,
} from "./overview.styles";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { selectTotalPage } from "../../redux/collection/collection.selector";

const OverviewPage = ({
  match,
  location,
  toggleSearchHidden,
  toggleDirectoryHidden,
  showRanking,
}) => {
  let type={};
   if(location.state.listname==="the loai")
    {
      type={genres:location.state.value,
            pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="tv movie")
    {
      type={type:location.state.value,
              pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="nam")
    {
      type={year:location.state.value,
              pageNumber:parseInt(match.params.pagenumber)}
    }
    else if(location.state.listname==="trang thai")
    {
      type={status:location.state.value,
               pageNumber:parseInt(match.params.pagenumber)}
    }
      else if(location.state.listname==="tim kiem")
    {
      type={keyword:location.state.value,
               pageNumber:parseInt(match.params.pagenumber)}
    }
      else
    {
      type={for:"all",
               pageNumber:parseInt(match.params.pagenumber)}
    }
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleSearchHidden();
    toggleDirectoryHidden();
    showRanking();
  },[]);

  return (
    <BigContainer>
      <OverviewContainer>
        <CollectionOverview
        type={type}
        >
        </CollectionOverview>
      </OverviewContainer>
      {/* {location.state.listname === "the loai" ? (
        <OverviewContainer>
          <CollectionOverview                            
            genres={location.state.value}
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      ) : location.state.listname === "tv movie" ? (
        <OverviewContainer>
          <CollectionOverview
            type={location.state.value}
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      ) : location.state.listname === "nam" ? (
        <OverviewContainer>
          <CollectionOverview
            year={location.state.value}
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      ) : location.state.listname === "trang thai" ? (
        <OverviewContainer>
          <CollectionOverview
            status={location.state.value}
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      ) : location.state.listname === "tim kiem" ? (
        <OverviewContainer>
          <CollectionOverview
            keyword={location.state.value}
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      ) : (
        <OverviewContainer>
          <CollectionOverview
            pageNumber={match.params.pagenumber}
          ></CollectionOverview>
          <PageContainer>
            <CurrentPage>{match.params.pagenumber}</CurrentPage>
          </PageContainer>
        </OverviewContainer>
      )} */}
    </BigContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
  showRanking: () => dispatch(showRanking()),
});
export default connect(null, mapDispatchToProps)(OverviewPage);
