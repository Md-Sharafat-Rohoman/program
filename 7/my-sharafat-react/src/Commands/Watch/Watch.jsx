import React from 'react';

const watch = (watch) => {
    const {name,price}=watch;
    return (
        <div>
            <p>price:{price}</p>
            <h2>name:{name}</h2>
        </div>
    );
};

export default watch;