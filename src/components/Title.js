import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { inputText } from "../redux/actions";

const Title = (props) => {
    const handleChange = (e) => {
        // console.log("handle text", e.target.value)
        dispatch(inputText(e.target.value))
    }

    const dispatch = useDispatch();
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    })

    const styles = {
        width: "79%",
        marginTop: "50px",
        border: "2px solid blue",
        padding: "15px",
        fontSize: "24px",
        color: "blue"
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input style={styles} type="text" onChange={handleChange}/>
            </div>
            <p style={{fontSize: "24px", color:"blue", margin: "0", marginTop: "20px"}}>{text}</p>
        </div>
    );
};

export default Title;