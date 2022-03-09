import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid'
import SingleComment from "./SingleComment";
import {useState, useEffect} from "react";
import {commentCreate, commentsLoad} from "./actions";
import Spin from "../components/Spin";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })
    console.log('comments', comments)
    const styles = {
        width: "79%",
        padding: "15px",
        border: "2px solid blue",
        fontSize: "15px",
        color: "blue"
    }
    const handleInput = (e) => {
        setTextComment(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitTextComment', textComment)
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }
    useEffect(() => {
        dispatch(commentsLoad())
    }, []);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" style={styles} value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            <Spin />
            {!!comments.length && comments.map(res => (
                <SingleComment key={res.id} data={res} />
            ))}
        </div>
    );
};

export default Comments;