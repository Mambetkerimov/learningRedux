import React from 'react';
import { connect } from "react-redux";
import {incrementLikes, decrementLikes} from '../redux/actions'

const Likes = (props) => {
    console.log(props)

    const classes = {
        padding: "19px 50px",
        border: "3px solid blue",
        background: "transparent",
        color: "blue",
        fontSize: "30px",
        textTransform: "uppercase",
        cursor: "pointer"
    }

    const controlClasses = {
        display: "flex",
        justifyContent: "center",
        gap: "135px",
        width: "100%",
        marginTop: "50px"
    }

    return (
        <div className="button-contorls" style={controlClasses}>
            <button onClick={props.onIncrementLikes} style={classes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes} style={classes}>Dislike</button>
        </div>
    );
};

function mapStateToProps(state) {
    console.log('mapStateToProps >', state);
    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            return dispatch(incrementLikes())
        },
        onDecrementLikes: () => {
            return dispatch(decrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);