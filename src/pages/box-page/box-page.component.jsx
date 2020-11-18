import React from "react";

import { BoxPageContainer, BoxPageTitle } from "./box-page.styles";
import BoxCollection from "../../components/box-collection/box-collection.component";

const BoxPage = () => {
  return (
    <BoxPageContainer>
      <BoxPageTitle>Danh sách anime đã thêm</BoxPageTitle>
      <BoxCollection></BoxCollection>
    </BoxPageContainer>
  );
};

export default BoxPage;
