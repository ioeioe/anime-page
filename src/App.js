import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Header from "./components/header/header.component";
import Directory from "./components/directory/directory.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";
import TopView from "./components/rating-frame/top-view.component";
import TopLike from "./components/rating-frame/top-like.component";
import Incoming from './components/incoming/incoming.component';
 

// import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
// import SignInPage from "./pages/sign-in-page/sign-in-page.component";
// import BoxPage from "./pages/box-page/box-page.component";
import { RankingContainer } from "./pages/homepage/homepage.styles";
import { selectCurrentUser } from "./redux/user/user.selector";
import { CheckUserSession } from "./redux/user/user.actions";
import { toggleSearchHidden } from "./redux/search/search.actions";
import { toggleDirectoryHidden } from "./redux/directory/directory.actions";
// import {pushCollectionToStore} from './redux/collection/collection.actions';
// import { pushGalleryToFirestore } from "./redux/anime-track/anime-track.actions";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const OverviewPage = lazy(() =>
  import("./pages/overviewpage/overview.component")
);
const DetailPage = lazy(() =>
  import("./pages/detail-page/detail-page.component")
);
const SignUpPage = lazy(() =>
  import("./pages/sign-up-page/sign-up-page.component")
);
const SignInPage = lazy(() =>
  import("./pages/sign-in-page/sign-in-page.component")
);
const BoxPage = lazy(() => import("./pages/box-page/box-page.component"));
const App = ({
  currentUser,
  toggleSearchHidden,
  toggleDirectoryHidden,
  location,
  checkUserSession
}) => {
  // useEffect(() => {
  //   // const cleanup = () => {
  //   //   if(currentUser)
  //   //   {
  //   //   pushGalleryToFirestore(currentUser.id);
  //   //   }
  //   // };
  //   // window.addEventListener("beforeunload", cleanup);
  //   // return () => {
  //   //   window.removeEventListener("beforeunload", cleanup);
  //   // };
  //   // pushCollectionToStore();
  //   checkUserSession();
  // }, []);
  const handleClick = () => {
    toggleSearchHidden();
    toggleDirectoryHidden();
  };
  const HeaderAndDirectoryExclude = ["/dang-nhap", "/dang-ki"];
  const RatingExclude=["/dang-nhap","/dang-ki","/theo-doi"];
  return (
    <div className="appDiv">
      {HeaderAndDirectoryExclude.indexOf(location.pathname) < 0 && <Header />}
      {HeaderAndDirectoryExclude.indexOf(location.pathname) < 0 && <Directory />}
      {location.pathname==="/" &&<Incoming />}
      <div className="ComponentContainer" onClick={handleClick}>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/anime/:id/:title" component={DetailPage}></Route>
              <Route
                path="/danh-sach/page/:pagenumber"
                component={OverviewPage}
              ></Route>

              <Route
                path="/the-loai/:genres/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/tv-movie/:type/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route 
                path="/most-view/:time/page/:pagenumber"
                component={OverviewPage}
                ></Route>
                <Route 
                path="/most-like/:time/page/:pagenumber"
                component={OverviewPage}
                ></Route>
              <Route
                path="/nam/:year/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/season/:season/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/trang-thai/:status/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/tim-kiem/keyword=:keyword/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                exact
                path="/dang-nhap"
                render={() =>
                  currentUser ? <Redirect to="/"></Redirect> : <SignInPage />
                }
              ></Route>
              <Route
                exact
                path="/dang-ki"
                render={() =>
                  currentUser ? <Redirect to="/"></Redirect> : <SignUpPage />
                }
              ></Route>
              <Route exact path="/theo-doi" component={BoxPage}></Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <RankingContainer>
         {RatingExclude.indexOf(location.pathname) < 0 && <TopView />}
         {RatingExclude.indexOf(location.pathname) < 0 && <TopLike />}
        </RankingContainer>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
  checkUserSession: () => dispatch(CheckUserSession()),
  // pushGalleryToFirestore: (userId) => dispatch(pushGalleryToFirestore(userId)),
  // pushCollectionToStore:()=>dispatch(pushCollectionToStore()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
