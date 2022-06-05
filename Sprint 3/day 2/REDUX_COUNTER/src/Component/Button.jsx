import React from 'react'
import { useDispatch } from 'react-redux'
import { action } from '../Redux/action';

export const Button = () => {
    const dispatch = useDispatch();

    const handleCount = (type) => {
        dispatch(action(type))
    }
  return (
    <div>
        <button onClick={() => handleCount("increment")}>ADD</button>
        <button onClick={() => handleCount("decrement")}>REDUCE</button>
    </div>
  )
}
