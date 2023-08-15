
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store';
import { useState } from 'react';
import { add, remove, done } from './store/reducers/todo.r';
import { ToDoStatus } from './models/todo.d';
import ToDoItem from './components/ToDoItem';

function App() {
  const todos = useSelector((state: RootState) => {
    return state.todo.todos;
  })
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  console.log("new task ", newTask)
  const handleRemove = (taskId: string) => {
    dispatch(remove({ id: taskId }));
  }
  const handleDone = (taskId: string) => {
    dispatch(done(taskId));
  }
  return (
    <div className="App">
      <div>
        <input placeholder='Add new todo' onChange={(e) => { setNewTask(e.target.value) }} />
        <button onClick={() => {
          dispatch(add({
            id: '',
            title: newTask,
            status: ToDoStatus.PENDING
          })
          );
          setNewTask("");
        }}>Add</button>
      </div>
      <div className='todo-container'>
        <ul >
          {todos.map((todo, index) =>
            <ToDoItem key={index} todo={todo} onDone={() => handleDone(todo.id)} onRemove={() => handleRemove(todo.id)} />)
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
