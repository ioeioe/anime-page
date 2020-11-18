import styled from 'styled-components';

export const IncomingContainer = styled.div`
    width:100%;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
      button.rec-dot {
display:none;
}

.rec.rec-pagination {
  position: absolute;
  top: 600px;
  left: 600px;
}
`

export const IncomingTitle =styled.p`
    font-family:Tahoma;
    font-size:15px;
    color:#E9DAC4;
`
export const IncomingItemContainer = styled.div`
    width:100%;
    height:180px;
    display:flex;
    justify-content:space-between;
`