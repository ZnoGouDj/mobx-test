import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from './store/todo';
import './App.css';

const Todo = observer(() => {
  return (
    <div className='todo-container'>
      <button onClick={() => todo.fetchTodos()}>fetch todo</button>
      <button onClick={() => todo.postTodos()}>post</button>
      <button onClick={() => todo.putTodos()}>put</button>
      <button onClick={() => todo.patchTodos()}>patch</button>
      <button onClick={() => todo.deleteTodos()}>delete</button>
      {todo.todos.map((t) => (
        <div className='todo' key={t.id}>
          <input type='checkbox' checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
          <span className={t.completed ? 'checked' : ''}>{t.title}</span>
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
