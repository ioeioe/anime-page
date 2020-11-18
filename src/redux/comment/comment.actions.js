import { CommentTypes } from "./comment.types";

export const fetchCommentsStart = (mal_id) => ({
  type: CommentTypes.FETCH_COMMENTS_START,
  payload:mal_id,
});

export const fetchCommentSuccess = (comments) => ({
  type: CommentTypes.FETCH_COMMENTS_SUCCESS,
  payload:comments
});

export const fetchCommentFailure = (error) => ({ 
  type: CommentTypes.FETCH_COMMENTS_FAILURE,
  payload:error,
});
