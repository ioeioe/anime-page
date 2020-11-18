import styled from 'styled-components';
export const BigCommentContainer = styled.div`
  width:100%;
  border:none;
  border-radius:10px;
  background-color:#131010;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

`
export const BigCommentTitleContainer = styled.div`
  width:90%;
  border-bottom:0.3px solid #5B636A;
`
export const BigCommentTitle = styled.p`
  width:fit-content;
  padding:20px 0 20px 0;
  border-bottom:2px solid yellow;
`
export const CommentContainer = styled.div`
  width:90%;
  margin:10px auto;
    border:none;
  border-radius:10px;
  background-color:#EED8D8;
    display:flex;
    
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`
export const NumberCommentAndSort = styled.div`
  width:90%;
  margin:auto;
  display:flex;
  justify-content:space-between;
`

export const NumberComment = styled.p`
  color:black;
  font-weight:bold;
`


export const SortType = styled.p`
  color:black;
`


export const CommentFrameContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:90%;
  margin:auto;
`

export const CommentFrameAndPostButton = styled.div`
  display:flex;
  width:90%;
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-between;

`
export const Avatar = styled.img`
  width:50px;
  height:50px;
`

export const PostCommentButton = styled.button`
  color:white;
  background-color:#1B5CC1;
  border:none;
  outline:none;
  cursor:pointer;
`
export const CommentFrame = styled.input`
  color:black;
  width:100%;
  min-height:50px;
  border:none;
  border-bottom:0.5px solid #46484A;
  outline:none;
  margin-bottom:10px;

  &:focus{
    height:100px;
  }
`
export const CommentItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    margin:auto;
    align-items:center;
`
