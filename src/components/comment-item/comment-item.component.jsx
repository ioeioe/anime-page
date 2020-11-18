import React from "react";

import { CommentItemContainer,CommentItemAvatar,CommentItemInfoContainer,UserName,UserComment,InteractContainer,LikeComment,ResponseComment,LikeNumber,TimeAgo} from "./comment-item.styles";
const CommentItem = ({item}) => {
  return (
    <CommentItemContainer>
        <CommentItemAvatar src={item.userImage}></CommentItemAvatar>
        <CommentItemInfoContainer>
            <UserName>{item.userName}</UserName>
                <UserComment>{item.commentText}</UserComment>
                <InteractContainer>
                    <LikeComment>
                        Thích
                    </LikeComment>
                    <ResponseComment>
                        Phản hồi
                    </ResponseComment>
                    <LikeNumber>

                    </LikeNumber>
                    <TimeAgo>{}</TimeAgo>
                </InteractContainer>
           
        </CommentItemInfoContainer>
    </CommentItemContainer>
  );
};
export default CommentItem;
