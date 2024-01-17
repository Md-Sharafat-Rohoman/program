// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

// eslint-disable-next-line react/prop-types
const Cart = ({selectedActors,remaning,totalCost}) => {
    // eslint-disable-next-line react/prop-types
    console.log(selectedActors);
    return (
        <div>
            <h3>Total Actors:{selectedActors.length}</h3>
            <h4>Total Remaning:{remaning}</h4>
            <h4>Total Coast:{totalCost}</h4>
            {
                // eslint-disable-next-line no-unused-vars, react/prop-types
                selectedActors.map((actor)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li key={actor.ID}>{actor.Name}</li>
                ))
            }
        </div>
    );
};

export default Cart;