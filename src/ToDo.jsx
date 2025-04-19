function ToDo({todo, removedTask, toggle}) {
    return (
        <div key={todo.id} className="flex justify-between items-center  p-3  mb-2">
            <div 
            className={`${todo.completed ? 'line-through text-green-600 cursor-pointer ' : 'cursor-pointer '}`}
            onClick={() => toggle(todo.id)}
            >
                {todo.task}
            </div>
            <button  
            className="text-red-600 hover:text-red-800 font-bold text-lg "
            onClick={()=> removedTask(todo.id)}
            >
            X
            </button>
        </div>
      );
}

export default ToDo;