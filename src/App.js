import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Directory from "./components/directory/directory.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import Spinner from "./components/spinner/spinner.component";
import { selectAnnounceHidden } from "./redux/announce/announce.selector";
import Announcement from './components/announcement/annoucement.component';
//import HomePage from "./pages/homepage/homepage.component";
// import OverviewPage from "./pages/overviewpage/overview.component";
// import DetailPage from "./pages/detail-page/detail-page.component";

// import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
// import SignInPage from "./pages/sign-in-page/sign-in-page.component";
// import BoxPage from "./pages/box-page/box-page.component";
import { RankingContainer } from "./pages/homepage/homepage.styles";

import TopView from "./components/top-view/top-view.component";
import TopLike from "./components/top-like/top-like.component";

import { pushCollectionToStore } from "./redux/collection/collection.actions";
import { CheckUserSession } from "./redux/user/user.actions";
import { fetchCollectionPreviewStart } from "./redux/collection/collection.actions";
import { toggleSearchHidden } from "./redux/search/search.actions";
import { toggleDirectoryHidden } from "./redux/directory/directory.actions";

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
// const TopLike= lazy(()=>import("./components/top-like/top-like.component"));
// const TopView = lazy(()=>import("./components/top-view/top-view.component"));
const App = ({
  currentUser,
  toggleSearchHidden,
  toggleDirectoryHidden,
  // fetchCollectionStart,
  // checkUserSession,
  location,
  // pushCollectionToStore,
}) => {
 
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  const handleClick = () => {
    toggleSearchHidden();
    toggleDirectoryHidden();
  };
  const exclusionArray=[
    '/dang-nhap',
    '/dang-ki',
  ]
  return (
    <div className="appDiv">
        {/* <Announcement /> */}
        {exclusionArray.indexOf(location.pathname) < 0 && <Header/>}
        {exclusionArray.indexOf(location.pathname) < 0 && <Directory/>}
        
      
      
      <div className="ComponentContainer" onClick={handleClick}>
       
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage}></Route>
              <Route
                path="/danh-sach/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route path="/anime/:id/:title" component={DetailPage}></Route>
              <Route
                path="/the-loai/:genres/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/tv-movie/:type/page/:pagenumber"
                component={OverviewPage}
              ></Route>
              <Route
                path="/nam/:year/page/:pagenumber"
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
              <Route exact path="/dang-ki"  render={() =>
                  currentUser ? <Redirect to="/"></Redirect> : <SignUpPage />
                }></Route>
              <Route exact path="/bo-suu-tap" component={BoxPage}></Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <RankingContainer>
          <TopView></TopView>
          <TopLike></TopLike>
        </RankingContainer>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


const mapDispatchToProps = (dispatch) => ({
  // fetchCollectionStart: () => dispatch(fetchCollectionPreviewStart()),
  toggleSearchHidden: () => dispatch(toggleSearchHidden()),
  toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden()),
  checkUserSession: () => dispatch(CheckUserSession()),
  // pushCollectionToStore: () => dispatch(pushCollectionToStore()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
//export default App;
