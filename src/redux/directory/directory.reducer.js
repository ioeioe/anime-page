import { DirectoryType } from "./directory.types";
const INITIAL_STATE = {
  categories: [],
  status: [],
  most_view: [],
  most_score: [],
  year: [],
  season:[],
  tv_movie: [],
  categoriesHidden: true,
  statusHidden: true,
  yearHidden: true,
  seasonHidden:true,
  mostviewHidden: true,
  mostscoreHidden: true,
  tvmovieHidden: true,
};
const category = [
  {
    "Đời thường": {
      url: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
      type: "anime",
      name: "Slice of Life",
      mal_id: 36,
    },
  },
  {
    Harem: {
      name: "Harem",
      url: "https://myanimelist.net/anime/genre/35/Harem",
      type: "anime",
      mal_id: 35,
    },
  },
  {
    Shounen: {
      mal_id: 27,
      type: "anime",
      url: "https://myanimelist.net/anime/genre/27/Shounen",
      name: "Shounen",
    },
  },
  {
    "Học Đường": {
      type: "anime",
      name: "School",
      url: "https://myanimelist.net/anime/genre/23/School",
      mal_id: 23,
    },
  },
  {
    "Thể Thao": {
      type: "anime",
      mal_id: 30,
      name: "Sports",
      url: "https://myanimelist.net/anime/genre/30/Sports",
    },
  },
  {
    Drama: {
      name: "Drama",
      url: "https://myanimelist.net/anime/genre/8/Drama",
      type: "anime",
      mal_id: 8,
    },
  },
  {
    "Cảnh Sát": {
      type: "anime",
      mal_id: 39,
      url: "https://myanimelist.net/anime/genre/39/Police",
      name: "Police",
    },
  },

  {
    "Phép Thuật": {
      name: "Magic",
      mal_id: 16,
      type: "anime",
      url: "https://myanimelist.net/anime/genre/16/Magic",
    },
  },
  {
    "Phiêu Lưu": {
      type: "anime",
      name: "Adventure",
      mal_id: 2,
      url: "https://myanimelist.net/anime/genre/2/Adventure",
    },
  },
  {
    Ecchi: {
      url: "https://myanimelist.net/anime/genre/9/Ecchi",
      name: "Ecchi",
      type: "anime",
      mal_id: 9,
    },
  },
  {
    Demons: {
      type: "anime",
      name: "Demons",
      mal_id: 6,
      url: "https://myanimelist.net/anime/genre/6/Demons",
    },
  },

  {
    "Hài Hước": {
      mal_id: 4,
      type: "anime",
      url: "https://myanimelist.net/anime/genre/4/Comedy",
      name: "Comedy",
    },
  },
  {
    "Hành Động": {
      type: "anime",
      mal_id: 1,
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
    },
  },
  {
    Romance: {
      url: "https://myanimelist.net/anime/genre/22/Romance",
      type: "anime",
      name: "Romance",
      mal_id: 22,
    },
  },
  {
    "Lịch Sử": {
      url: "https://myanimelist.net/anime/genre/13/Historical",
      type: "anime",
      name: "Historical",
      mal_id: 13,
    },
  },
  {
    "Âm Nhạc": {
      mal_id: 19,
      type: "anime",
      url: "https://myanimelist.net/anime/genre/19/Music",
      name: "Music",
    },
  },
  {
    "Viễn Tưởng": {
      type: "anime",
      name: "Sci-Fi",
      url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      mal_id: 24,
    },
  },
  {
    Thriller: {
      type: "anime",
      name: "Thriller",
      mal_id: 41,
      url: "https://myanimelist.net/anime/genre/41/Thriller",
    },
  },
  {
    Fantasy: {
      name: "Fantasy",
      url: "https://myanimelist.net/anime/genre/10/Fantasy",
      mal_id: 10,
      type: "anime",
    },
  },
  {
    Game: {
      url: "https://myanimelist.net/anime/genre/11/Game",
      type: "anime",
      mal_id: 11,
      name: "Game",
    },
  },
  {
    "Super Power": {
      name: "Super Power",
      url: "https://myanimelist.net/anime/genre/31/Super_Power",
      mal_id: 31,
      type: "anime",
    },
  },
  {
    "Martual Art": {
      name: "Martial Arts",
      mal_id: 17,
      type: "anime",
      url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
    },
  },
  {
    "Siêu Nhiên": {
      name: "Supernatural",
      url: "https://myanimelist.net/anime/genre/37/Supernatural",
      mal_id: 37,
      type: "anime",
    },
  },
  {
    Mystery: {
      name: "Mystery",
      type: "anime",
      url: "https://myanimelist.net/anime/genre/7/Mystery",
      mal_id: 7,
    },
  },
  {
    Psychological: {
      type: "anime",
      name: "Psychological",
      url: "https://myanimelist.net/anime/genre/40/Psychological",
      mal_id: 40,
    },
  },
];
// export const category = [
//   {
//     "Đời thường": "Slice of Life",
//   },
//   {
//     "Học Đường": "School",
//   },
//   {
//     "Hài Hước": "Comedy",
//   },
//   {
//     "Hành Động": "Action",
//   },
//   {
//     Romance: "Romance",
//   },
//   {
//     "Phiêu Lưu": "Adventure",
//   },
//   {
//     Harem: "Harem",
//   },
//   {
//     Shounen: "Shounen",
//   },

//   {
//     "Thể Thao": "Sports",
//   },
//   {
//     Drama: "Drama",
//   },

//   {
//     "Phép Thuật": "Magic",
//   },

//   {
//     Ecchi: "Ecchi",
//   },
//   {
//     Demons: "Demons",
//   },

//   {
//     "Lịch Sử": "Historical",
//   },
//   {
//     "Âm Nhạc": "Music",
//   },
//   {
//     Horror: "Horror",
//   },
//   {
//     "Viễn Tưởng": "Sci-Fi",
//   },
//   {
//     Thriller: "Thriller",
//   },
//   {
//     Fantasy: "Fantasy",
//   },
//   {
//     Game: "Game",
//   },
//   {
//     "Super Power": "Super Power",
//   },
//   {
//     "Martual Art": "Martial Arts",
//   },
//   {
//     "Siêu Nhiên": "Supernatural",
//   },
//   {
//     Vampire: "Vampire",
//   },
//   {
//     Xe: "Cars",
//   },
//   {
//     Mystery: "Mystery",
//   },
//   {
//     Psychological: "Psychological",
//   },
//   {
//     Mecha: "Mecha",
//   },
//   {
//     "Quân đội": "Military",
//   },
//   {
//     Parody: "Parody",
//   },
//   {
//     "Cảnh Sát": "Police",
//   },
// ];
const Status = [{ "Đang tiến hành": "onGoing" }, { "Hoàn thành": "finished" }];

const Mostview = [
  { Ngày: "day" },
  { Tuần: "week" },
  { Tháng: "month" },
  { Mùa: "season" },
  { Năm: "year" },
  { "Tất cả": "all" },
];
const Mostscore = [
  { Ngày: "day" },
  { Tuần: "week" },
  { Tháng: "month" },
  { Mùa: "season" },
  { Năm: "year" },
  { "Tất cả": "all" },
];
const Season = [
  {Xuân:"spring"},
  {Hạ:"summer"},
  {Thu:"fall"},
  {Đông:"winter"},
]
const Year = [
  { 2020: 2020 },
  { 2019: 2019 },
  { 2018: 2018 },
  { 2017: 2017 },
];

const TV_Movie = [
  { "TV series": "TV" },
  { Movie: "Movie" },
  { ONA: "ONA" },
  { OVA: "OVA" },
  { SPECIAL: "Special" },
];

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryType.TOGGLE_CATEGORY_HIDDEN:
      return {
        ...state,
        categories: category,
        statusHidden: true,
        mostviewHidden: true,
        mostscoreHidden: true,
        yearHidden: true,
        seasonHidden:true,
        tvmovieHidden: true,
        categoriesHidden: !state.categoriesHidden,
      };
    case DirectoryType.TOGGLE_STATUS_HIDDEN:
      return {
        ...state,
        status: Status,
        mostviewHidden: true,
        mostscoreHidden: true,
        yearHidden: true,
          seasonHidden:true,
        tvmovieHidden: true,
        categoriesHidden: true,
        statusHidden: !state.statusHidden,
      };
    case DirectoryType.TOGGLE_MOST_VIEW_HIDDEN:
      return {
        ...state,
        most_view: Mostview,
        statusHidden: true,
        yearHidden: true,
          seasonHidden:true,
        mostscoreHidden: true,
        tvmovieHidden: true,
        categoriesHidden: true,
        mostviewHidden: !state.mostviewHidden,
      };
    case DirectoryType.TOGGLE_MOST_SCORE_HIDDEN:
      return {
        ...state,
        most_score: Mostscore,
        statusHidden: true,
        yearHidden: true,
          seasonHidden:true,
        tvmovieHidden: true,
        categoriesHidden: true,
        mostviewHidden: true,
        mostscoreHidden: !state.mostscoreHidden,
      };
    case DirectoryType.TOGGLE_YEAR_HIDDEN:
      return {
        ...state,
        year: Year,
        statusHidden: true,
        seasonHidden:true,
        mostviewHidden: true,
        mostscoreHidden: true,
        tvmovieHidden: true,
        categoriesHidden: true,
        yearHidden: !state.yearHidden,
      };
        case DirectoryType.TOGGLE_SEASON_HIDDEN:
      return {
        ...state,
        season:Season,
        yearHidden: true,
        statusHidden: true,     
        mostviewHidden: true,
        mostscoreHidden: true,
        tvmovieHidden: true,
        categoriesHidden: true,
           seasonHidden:!state.seasonHidden,
      };
    case DirectoryType.TOGGLE_TV_MOVIE_HIDDEN:
      return {
        ...state,
        tv_movie: TV_Movie,
        statusHidden: true,
        mostviewHidden: true,
        mostscoreHidden: true,
        yearHidden: true,
        seasonHidden:true,
        categoriesHidden: true,
        tvmovieHidden: !state.tvmovieHidden,
      };
    case DirectoryType.TOGGLE_DIRECTORY_HIDDEN:
      return {
        ...state,
        categoriesHidden: true,
        statusHidden: true,
        mostviewHidden: true,
        mostscoreHidden: true,
        yearHidden: true,
        seasonHidden:true,
        tvmovieHidden: true,
      };
    default:
      return {
        ...state,
        categories: category,
        status: Status,
        most_view: Mostview,
        most_score: Mostscore,      
        year: Year,
        season:Season,
        tv_movie: TV_Movie,
      };
  }
};

export default DirectoryReducer;


