import './App.css';
import { useState } from 'react';
import TodoForm from './TodoForm'
import ToDo from './ToDo';

function App() {

  const [todos, setTodos] = useState([])

   const addTask = (text) => {
    if(text){
      const newTodo = {
        id: Math.random().toString(10).substr(2,9) ,
        task:text ,
        completed: false
      }
      setTodos([...todos,newTodo])
    }
  }

  const removedTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }


  const toggle = (id) => {
    setTodos([...todos.map(todo => todo.id === id ?
      {
        ...todo,
        completed: !todo.completed
      }
      :
      {...todo}
    )])
  }



  return(
    <div className='ontainer mx-auto p-4 max-w-md'>
      <header>
        <h1 className='text-center text-4xl italic text-blue-500 mb-6'>Количество задач №{todos.length}</h1>
      </header>
      {
        todos.map((todo) =>{
          return(

          <ToDo 
          todo={todo}
          removedTask={removedTask}
          toggle={toggle}
          />
          )
          

        })
      }
      
      <TodoForm addTask={addTask}/>
    </div>
  
)
 
}



export default App;
