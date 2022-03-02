import React from 'react';

const Likes = (props) => {
    return (
        <div className="button-contorls">
            <button>❤{props.likes}</button>
            <button>Dislike</button>
        </div>
    );
};

export default Likes;