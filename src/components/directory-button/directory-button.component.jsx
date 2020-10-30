import React from "react";
import { DirectoryButtonStyle } from "./directory-button.styles";
import { withRouter } from "react-router-dom";
const DirectoryButton = ({ label, match, path, history, handleClick }) => {
  return path !== undefined ? (
    <DirectoryButtonStyle onClick={() => history.push(`${match.url}${path}`)}>
      {label}
    </DirectoryButtonStyle>
  ) : (
    <DirectoryButtonStyle onClick={handleClick}>{label}</DirectoryButtonStyle>
  );
};

export default withRouter(DirectoryButton);
