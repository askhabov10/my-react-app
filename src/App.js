import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [text,setText] = useState()
const [messages, setMessages] = useState(
  [
    {
      id:'1',
      content:"Привет",
      side:'inbox',
      author:'admin'
    },
    {
      id:'2',
      content:"Привет",
      side:'outside',
      author:'user'
    },
    {
      id:'3',
      content:"Как дела?",
      side:'inbox',
      author:'admin'
    },
    {
      id:'4',
      content:"Отлично, У тебя как?",
      side:'outside',
      author:'user'
    },
    {
      id:'5',
      content:"Неплохо",
      side:'inbox',
      author:'admin'
    }
  ] 
) 


function removeMess(id) {
  setMessages(
    messages.filter(message=> {
      return message.id !== id
    })
  )
}

function handleChange(event){
  setText(event.target.value)
}
function handleAdd(){
  setText('')
  setMessages([
      ...messages,
      {
          text:text
      }
  ])
}


  return (
    <div className="md:container mx-auto"> 
      <h1 className='text-4xl text-center font-bold py-10'>Chat group</h1>
      
    
      {messages.length == 0 ? <p className='text-2xl text-center flex items-center mx-auto'>Empty</p> :
        <div className='flex flex-col gap-x-3 mt-10 '>
          {
            messages.map(message =>{
              return(
                <div key={message.id} className={`relative p-3 rounded-xl w-60 
                ${message.side === 'inbox' ? 'ml-auto bg-blue-500'  : 'bg-green-500'  } `}>
                  <p>{message.content}</p>
                  <p className="text-xl">{message.text}</p>
                  <span className='text-sm text-gray-700'>{message.author}</span>
                  <button onClick={() => removeMess(message.id)} 
                  className='absolute top-2 right-4 bg-transparent text-sm font-bold text-red-600' >X
                  </button>
                </div>

            

              )
            })
          }
        </div>
      }
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="md:container mx-auto p-4">
          <div className="flex gap-x-3">
             <input 
                className="border-2 border-indigo-600 py-3 px-2 w-full text-lg flex-1 rounded-lg focus:outline-none" type="text"  
                value={text}  
                onChange={(event) => handleChange(event)}/> 
                  <button onClick={handleAdd} className="border-2 border-indigo-600 py-3 px-5 bg-indigo-600 text-white rounded-lg  transition-all delay-75 hover:bg-transparent hover:text-indigo-600">Add</button>
            </div>  
          </div>  
        </div>
    </div>   
  );
}



export default App;
