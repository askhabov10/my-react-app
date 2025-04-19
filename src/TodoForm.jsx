import { useState } from "react";



function TodoForm({addTask}) {

    const [text, setText] = useState('')

    const handleChange =(e) => {
        setText(e.target.value)
    }

    const handleSumbit =(e) => {
        e.preventDefault()
        addTask(text)
        setText('')
    }
    return ( 
        <div className="flex justify-center">
            <form onClick={handleSumbit}>
                <input
                value={text}
                className="mt-10"
                type="text"
                placeholder="Add tack..."
                
                onChange={(e) => handleChange(e)}
                />
                <button>+</button>
            </form>
        </div>

     );
}

export default TodoForm;
