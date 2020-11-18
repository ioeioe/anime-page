import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const SlideViewContainer = styled.div`
    margin-top:63px;
    width:100%;
    height:auto;
    button.rec-dot {
  border: none;
  outline: none;
  background-color: #f5bdbd;
  box-shadow: none;
}
button.rec-dot_active {
  background-color: orange;
}
.rec.rec-pagination {
  position: absolute;
  top: 720px;
  left: 720px;
}
.rec.rec-arrow {
  display: none;
}
button.rec-dot:hover,
button.rec-dot:active,
button.rec-dot:focus {
  border: none;
  outline: none;
  box-shadow: none;
}

`
