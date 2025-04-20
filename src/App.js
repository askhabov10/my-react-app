import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';


function App() {

const numder = useSelector(state => state)
const dispatch = useDispatch(state => state )
 


const plus = () => {
  dispatch({
    type: 'PLUS'
  })
}
  const minus = () => {
    dispatch({
      type: 'MINUS'
    })

}



  return(
    <div className='container mx-auto text-center'>
      <p className='text-5xl font-bold '>{numder}</p>
      <button onClick={plus} className='border-2 border-green-500 py-2 px-5 text-xl'>+</button>
      <button onClick={minus} className='border-2 border-green-500 py-2 px-5 text-xl'>-</button>
    </div>
  )
 
}



export default App;
