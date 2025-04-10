import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
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




  return (
    <div className="md:container mx-auto"> 
      <h1 className='text-4xl text-center font-bold py-10'>Chat group</h1>
      {messages.length == 0 ? <p className='text-2xl text-center flex items-center mx-auto'>Empty</p> :
        <div className='flex flex-col gap-x-3 mt-10 '>
          {
            messages.map(message =>{
              return(
                <div key={message.id} className={`relative p-3 rounded-xl w-60 ${message.side === 'inbox' ? 'ml-auto bg-blue-500' : 'bg-green-500' }`}>
                  <p>{message.content}</p>
                  <span className='text-sm text-gray-700'>{message.author}</span>
                  <button onClick={() => removeMess(message.id)} className='absolute top-2 right-4 bg-transparent text-sm font-bold text-red-600' >X</button>
                </div>
                )
            })
          }
        </div>
      }
    </div>   
  );
}



export default App;
