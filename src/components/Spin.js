import React from 'react';
import {useSelector} from "react-redux";
import {TailSpin} from "react-loader-spinner";

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);
    console.log('spinner', spinner)
    return (
        <div className="loader-styles">
            <TailSpin
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
                visible={spinner}
            />
        </div>
    );
};

export default Spin;