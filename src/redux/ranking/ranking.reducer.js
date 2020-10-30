import { RankingType } from "./ranking.types";

const INITIAL_STATE = {
  hidden: false,
};

const RankingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RankingType.HIDE_RANKING:
      return {
        hidden: true,
      };
    case RankingType.SHOW_RANKING:
      return {
        hidden: false,
      };
    default:
      return state;
  }
};
export default RankingReducer;
