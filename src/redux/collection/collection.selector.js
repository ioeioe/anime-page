import { createSelector } from "reselect";

const Collections = (state) => state.collection;


export const selectCollections = createSelector(
  [Collections],
  (data) => data.collections
);
export const selectViewRating = createSelector(
  [Collections],
  (data) => data.viewRating
);
export const selectScoreRating = createSelector(
  [Collections],
  (data) => data.scoreRating
);

export const isLoading = createSelector(
  [Collections],
  (data) => data.loading
);
export const isViewRatingloading = createSelector(
  [Collections],
  (data) => data.viewRatingLoading
);
export const isScoreRatingloading = createSelector(
  [Collections],
  (data) => data.scoreRatingLoading
);
export const selectSearchCollection = createSelector(
  [Collections],
  (data) => data.searchCollection
);
export const selectIncomingCollection = createSelector(
  [Collections],
  (data)=>data.incomingCollection
)
export const isIncomingloading = createSelector(
  [Collections],
  (data) => data.incomingLoading,
);
export const selectPreviousPage = createSelector(
  [Collections],
  (data)=>data.previousPage
)

export const selectFirstDocument = createSelector(
  [Collections],
  (data)=>data.firstDocument,
)

export const selectLastDocument = createSelector(
  [Collections],
  (data)=>data.lastDocument,
)

export const selectIndexOfItem = (item) =>
  createSelector([selectCollections], (data) => data.indexOf(item));

export const selectAnimeByIndex = (index) =>
{
  createSelector([selectCollections],(data)=>data[index]);
}

export const selectCollectionByTypes = (props) =>
  createSelector([selectCollections], (data) => {
    if (props.genres) {
      return data.filter((item) => {
        for (let i = 0; i < item.genres.length; i++) {
          if (item.genres[i].name === props.genres) {
            return true;
          }
        }
        return false;
      });
    } else if (props.type) {
      return data.filter((item) => item.type === props.type);
    } else if (props.year) {
      return data.filter((item) => {
        if (item.airing_start == null) {
          return false;
        }
        return item.airing_start.slice(0, 4) === props.year;
      });
    } else if (props.status) {
      return data.filter((item) => {
        if (props.status === "onGoing") {
          return item.continuing === true;
        } else if (props.status === "finished") {
          return item.continuing === false;
        }
        return false;
      });
    } else if (props.keyword) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(props.keyword.toLowerCase())
      );
    } else {
      return data;
    }
  });

// export const selectSearchCollecion = (search) =>
//   createSelector([selectCollections], (data) =>
//     data
//       .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
//       .slice(0, 5)
//   );

export const selectCollectionsPerPage = (props) =>
  createSelector([selectCollectionByTypes(props)], (data) => {
    // const collections = data.slice(
    //   (props.pageNumber - 1) * 40,
    //   props.pageNumber * 40
    // );
    const collections = data;
    const totalPage = data / 40 + 1;
    return { collections, totalPage };
  });



export const selectAnimeByGenres = (genres, page) =>
  createSelector([selectCollections], (data) =>
    data
      .filter((item) => item.genres.indexOf(genres) !== -1)
      .slice((page - 1) * 40, page * 40)
  );
// )
// export const selectCategory = (categoryId) =>
//   createSelector(
//     [Collections],

//     (data) => {
//       return categoryId === "category" ? data.category : null;
//     }
//   );
// export const selectCategory = createSelector(
//   [Collections],
//   (data) => data.categories
// );
// export const selectCategorykey = createSelector([selectCategory], (data) =>
//   Object.keys(data)
// );

// export const isHidden = createSelector([Collections], (data) => data.hidden);
