import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.value)
    return (
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}>
                increment
            </button>
            <p>
                {count}
            </p>
            <button onClick={()=>{
                dispatch(decrement())
            }}>
                decrement
            </button>
        </div>
    );
}

export default Counter;
