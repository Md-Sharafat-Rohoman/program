import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/watch';
import { add, multiply } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';


const sunglass = () => {
    const first = 55;
    const second = 100;
    const sum = add(first,second);
    const mul = multiply(first,second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default sunglass;