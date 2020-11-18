import React,{useState,useEffect} from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {   BigCommentContainer,
  BigCommentTitleContainer,
  BigCommentTitle,
  CommentContainer,
  NumberCommentAndSort,
  NumberComment,
  SortType,
  CommentFrameContainer,
  Avatar,
  CommentFrame,
    CommentItemContainer,
    CommentFrameAndPostButton,
  PostCommentButton } from "./comment.styles.jsx";

import {PostCommentToFirestore} from '../../firebase/firebase.utils.js';
import {fetchCommentsStart} from '../../redux/comment/comment.actions';
import {selectComments,loadingComments} from '../../redux/comment/comment.selector';

import CommentItem from '../comment-item/comment-item.component';

const Comment = ({currentUser,id,fetchCommentsStart,comments,loading}) => {
   const [comment,setComment] = useState("");
  const handleChange = (event)=>{
    const {value} = event.target;
    setComment(value);
  }
  useEffect(()=>{
    fetchCommentsStart(id);
  },[])

  const PostComment = () =>{
    try{
    let userImage = currentUser.imageUrl;
    let userName = currentUser.lastName + " "+ currentUser.firstName;
    PostCommentToFirestore(userImage,userName,id,comment)
    }
    catch(error)
    {
      console.log(error);
    }
  }
 
  return  (
  <BigCommentContainer>
        <BigCommentTitleContainer>
          <BigCommentTitle>Bình luận</BigCommentTitle>
        </BigCommentTitleContainer>
        <CommentContainer>
          <NumberCommentAndSort>
            <NumberComment>bình luận</NumberComment>
            <SortType type="text">Sắp xếp theo</SortType>
          </NumberCommentAndSort>
          <CommentFrameContainer>
            <Avatar src={currentUser.imageUrl} alt="user image"></Avatar>
            <CommentFrameAndPostButton>
            <CommentFrame placeholder="Thêm bình luận" type="text" name="comment" value={comment} onChange={handleChange}>               
            </CommentFrame>
             <PostCommentButton onClick={()=>PostComment()}>Đăng</PostCommentButton>
            </CommentFrameAndPostButton>
          </CommentFrameContainer>
          {loading?null:(
          <CommentItemContainer>    
            {
              comments.map(item=>(
                <CommentItem item={item}></CommentItem>
              ))
            }
          </CommentItemContainer>
          )}
        </CommentContainer>
    </BigCommentContainer>);
};

const mapStateToProps = createStructuredSelector({
  comments:selectComments,
  loading:loadingComments
})
const mapDispatchToProps = (dispatch)=>({
  fetchCommentsStart:(id)=>dispatch(fetchCommentsStart(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Comment);
