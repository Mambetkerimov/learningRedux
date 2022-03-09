import React from 'react';
import {useState, useEffect} from "react";
import {commentDelete, commentUpdate} from "./actions";
import {useDispatch, useSelector} from "react-redux";

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;
    useEffect(() => {
       if(text) {
           setCommentText(text)
       }
    }, [text]);
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setCommentText(e.target.value)
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }
    const styles = {
        width: "79%",
        padding: "15px",
        border: "2px solid blue",
        fontSize: "15px",
        color: "blue"
    }

    return (
            <form onSubmit={handleUpdate} className="comments-item-create" style={{display: "flex", gap: "20px", marginTop: "30px", alignItems: "center"}}>
                <div onClick={handleDelete} className="comments-item-delete" style={{cursor: "pointer"}}>&times;</div>
                <input type="text" style={styles} value={commentText} onChange={handleInput} />
                <input type="submit" hidden/>
            </form>
    );
};

export default SingleComment;