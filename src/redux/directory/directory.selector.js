import { createSelector } from "reselect";

const Directory = (state) => state.directory;

export const selectCategoryHidden = createSelector(
  [Directory],
  (data) => data.categoriesHidden
);

export const selectStatusHidden = createSelector(
  [Directory],
  (data) => data.statusHidden
);
export const selectMostviewHidden = createSelector(
  [Directory],
  (data) => data.mostviewHidden
);
export const selectMostscoreHidden = createSelector(
  [Directory],
  (data) => data.mostscoreHidden
);

export const selectYearHidden = createSelector(
  [Directory],
  (data) => data.yearHidden
);

export const selectSeasonHidden = createSelector(
  [Directory],
  (data) => data.seasonHidden
);

export const selectTvMovieHidden = createSelector(
  [Directory],
  (data) => data.tvmovieHidden
);
export const selectCategoryList = createSelector(
  [Directory],
  (data) => data.categories
);
export const selectStatusList = createSelector(
  [Directory],
  (data) => data.status
);
export const selectMostviewList = createSelector(
  [Directory],
  (data) => data.most_view
);
export const selectMostscoreList = createSelector(
  [Directory],
  (data) => data.most_score
);

export const selectYearList = createSelector(
  [Directory],
  (data) => data.year
);

export const selectSeasonList = createSelector(
  [Directory],
  (data) => data.season
);

export const selectTvMovieList = createSelector(
  [Directory],
  (data) => data.tv_movie
);
