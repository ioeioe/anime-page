import styled from 'styled-components';

export const CommentItemContainer = styled.div`
    width:100%;
    height:110%;
    display:flex;
    justify-content:space-between;
`

export const CommentItemAvatar = styled.img`
    width:50px;
    height:50px;
`

export const CommentItemInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:90%;
 
`
export const UserName = styled.p`
    margin:0;
    font-weight:bold;
    color:#336BFF;

`

export const UserComment = styled.p`
 margin:0;
    width:100%;
    color:black;
`

export const InteractContainer = styled.p`
    margin-top:10px;
    width:40%;
    display:flex;
    justify-content:space-between;
    color:#477AFF;

`
export const LikeComment = styled.p`
    margin:0;
`
export const ResponseComment = styled.p`
    margin:0;
`
export const LikeNumber = styled.p`
        margin:0;
`

export const TimeAgo = styled.p`
        margin:0;
`