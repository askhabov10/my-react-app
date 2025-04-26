import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import HomePage from "./pages/HomePage/HomePage";
import TitlePage from "./pages/TitlePage/TitlePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./Layout/Layout"
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return ( 
    <div>
      <Routes >
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/title'element={<TitlePage/>}/>
            <Route path='/about'element={<AboutPage/>}/>
            <Route path='*'element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>

   );
}

export default App;
















/*
function App() {
const [text, setText] = useState()
const dispatch = useDispatch(state => state )
const todos = useSelector(state => state)



const handlerRemove = (id) => {
  dispatch({
    type: 'DELETE',
    payload: id
  })

}

const addTack = (e) => {
  e.preventDefault()
  let newTodo = {
    text: text,
    completed: false
  }
  setText('')

  dispatch({
    type: 'ADD',
    payload: newTodo
  })

}


const handlerChange = (e) => {
  setText(e.target.value)
}

console.log(text)
  return(
    <form onSubmit={addTack} className='container mx-auto text-center'>
      {
        todos.map(todo=>{
          return (
            <div key={todo.id} className='flex items-center justify-between gap-3 mb-3'>
              <input type='checkbox' defaultChecked={todo.completed}/>
              <p>{todo.text}</p>
              <button onClick={() =>handlerRemove(todo.id)} className='ml-auto rounded-3xl border-2 border-red-500 py-1 px-3 text-xl'>X</button>
            </div>
          )

        })
      }
      <div className='flex items-center justify-between gap-3 '>
        <input value={text} onChange={e => handlerChange(e)} type='text' className='w-full py-2 px-4 border border-gray-300' />
        <button  className='ml-auto rounded-xl border-2 border-sky-500 py-2 px-4 text-xl'>ADD</button>
      </div>  
      
    </form>
  )
 
}



export default App;
*/