import React from "react";
import {
  UpcomingContainer,
  MoveBackward,
  MoveForward,
} from "./upcoming.styles";
import AnimeItem from "../anime-item/anime-item.component";

const Upcoming = () => {
  return (
    <UpcomingContainer>
      <MoveBackward></MoveBackward>
      <MoveForward></MoveForward>
    </UpcomingContainer>
  );
};

export default Upcoming;
