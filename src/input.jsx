import { useState } from "react";

function Input() {

    const [text, setText] = useState()
    const [todos, setTodos] = useState( [

        {
            id:'1',
            text:'Learn JS'
        },
        {
            id:'2',
            text:'Learn React'
        },
        {
            id:'3',
            text:'Learn Crypto'
        }
    ])


 function handleChange(event){
    setText(event.target.value)
 }

 function handleAdd(){
    setText('')
    setTodos([
        ...todos,
        {
            text:text
        }
    ])
 }


    return (  
        <div className="flex flex-col mx-auto max-w-lg pt-10 ">
            <div className="flex gap-x-3">
               <input 
                className="border-2 border-indigo-600 py-3 px-2 w-full text-lg" type="text" 
            
                value={text}
                onChange={(event) => handleChange(event)}/> 

                <button onClick={handleAdd} className="border-2 border-indigo-600 py-3 px-5 bg-indigo-600 text-white rounded-lg transition-all delay-75 hover:bg-transparent hover:text-indigo-600">Add</button>
            </div>
            <div className="mt-4">
                {
                    todos.map(todo => {
                        return (
                            <p className="text-xl">{todo.text}</p>
                        )
                    })
                }
            </div>
            
        </div>
    );
}


export default Input;
    
