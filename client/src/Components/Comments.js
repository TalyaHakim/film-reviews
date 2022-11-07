import React, {useContext, useState} from 'react';
import CommentContext from '../Context/comments/commentContext';


const Comments = ({movieId}) => {

  const commentContext = useContext(CommentContext);
  const {comments} = commentContext;

  const [comment, setComment] = useState(
    {
        user_name: "",
        content: "",
        createdAt: "",
        onMovie: movieId
    }
  );

  const addComment = e => {
    e.preventDefault();
    commentContext.addReplay(comment);
    setComment({...comment, content: ''});
  }

  const postComments = () => {
    return comments.filter(comment => comment.onMovie === movieId)
  }

  const onChange = e => {
    setComment({
      ...comment, 
      content: e.target.value, 
      createdAt: new Date().toString()
    });
  }

  return (
    <>
    <div className="input-group">
            <input className="form-control border-end-0 border rounded-pill"
            type="text" 
            placeholder='Write a comment...'
            value={comment.content}
            onChange={onChange}/>
            <span className="input-group-append">
                <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" 
                disabled={!comment.content} onClick={addComment}>
                <i className="bi bi-send"></i>
                </button>
            </span>
      </div>
    <ul className="list-group list-group-flush">
      {postComments().map((comment, index) => (
        <li key={index} className="list-group-item">
            <strong>User name</strong>
            <p>{comment.content}</p>
            <small>{comment.createdAt}</small>
        </li>
      ))} 
    </ul>
    </>
  )
}

export default Comments;