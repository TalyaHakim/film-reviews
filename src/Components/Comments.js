import React, {useContext, useState} from 'react';
import CommentContext from '../Context/comments/commentContext';

const Comments = ({movieId}) => {

  const commentContext = useContext(CommentContext);

  const [comment, setComment] = useState(
    {
          user_name: "",
          content: "",
          createdAt: "",
          onMovie: movieId
    }
  );

  const replay = e => {
    e.preventDefault();
    commentContext.addReplay(comment);
    console.log(comment);
  }

  const onChange = e => {
    setComment({...comment, content: e.target.value, createdAt: new Date().toString()});
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
                onClick={replay}>
                <i className="bi bi-send"></i>
                </button>
            </span>
      </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <strong>User name</strong>
            <p>content</p>
        </li>
    </ul>
    </>
    
  )
}

export default Comments;