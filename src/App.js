import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

  


  return (
    <>
    <h1>Todo List</h1>
    <div className='containerr'>
      <ul>
        <li>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter" && inputValue !== "") {
                setTodos(todos.concat(inputValue));
                setInputValue('');
              }
            }}
            type='text'
            placeholder='What do you need to do'
          />
        </li>
        {todos.length === 0 ? (
          <li>No hay tareas.</li>
        ) : (
          todos.map((item, index) => (
            <li key={index}>
              {item}
              {' '}
              <i
                className='fa-solid fa-xmark'
                onClick={() =>
                  setTodos(
                    todos.filter(
                      (t, currentIndex) => index !== currentIndex
                    )
                  )
                }
              ></i>
            </li>
          ))
        )}
      </ul>
      <div>{todos.length} tasks</div>
     
    </div>


    {todos.length > 0 && (
        <button
        className='mt-2 btn btn-light'
          onClick={() => {
            setTodos([]);
          }}
        >
          Eliminar todas las tareas
        </button>
      )}
  </>
  )
    
    
  
}

export default App;
