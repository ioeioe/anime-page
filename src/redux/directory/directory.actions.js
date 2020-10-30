import { DirectoryType } from "./directory.types";

export const toggleCategoryHidden = () => ({
  type: DirectoryType.TOGGLE_CATEGORY_HIDDEN,
});
export const toggleStatusHidden = () => ({
  type: DirectoryType.TOGGLE_STATUS_HIDDEN,
});

export const toggleMostviewHidden = () => ({
  type: DirectoryType.TOGGLE_MOST_VIEW_HIDDEN,
});

export const toggleMostcommentHidden = () => ({
  type: DirectoryType.TOGGLE_MOST_COMMENT_HIDDEN,
});

export const toggleYearHidden = () => ({
  type: DirectoryType.TOGGLE_YEAR_HIDDEN,
});

export const toggleTvMovieHidden = () => ({
  type: DirectoryType.TOGGLE_TV_MOVIE_HIDDEN,
});

export const toggleDirectoryHidden = () => ({
  type: DirectoryType.TOGGLE_DIRECTORY_HIDDEN,
});
