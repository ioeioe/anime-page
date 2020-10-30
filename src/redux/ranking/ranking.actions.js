import { RankingType } from "./ranking.types";

export const hideRanking = () => ({
  type: RankingType.HIDE_RANKING,
});

export const showRanking = () => ({
  type: RankingType.SHOW_RANKING,
});
