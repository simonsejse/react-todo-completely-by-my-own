import './App.css';
import React, { useReducer, useEffect } from 'react';

import ListTodos from './ListTodos';
import { reducer } from './TodoReducer';
import actions from './TodoReducerActions';

const initialState = {
  isLoading: false,
  todos: [],
  title: '',
  desc: '',
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeTodo = (id) => {
    dispatch({ type: actions.REMOVE_TODO, payload: id });
  };

  const changeValue = (e) => {
    dispatch({
      type: actions.CHANGE_VALUE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const submitTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: state.todos.length + 1,
      title: state.title,
      desc: state.desc,
    };
    dispatch({ type: actions.ADD_TODO, payload: todo });
  };

  useEffect(() => {
    dispatch({ type: actions.RETRIEVE_TODO });
  }, []);

  return (
    (state.isLoading && <h1>Loading</h1>) || (
      <div className='App'>
        <header className='header'>
          <div>
            <h1>Todos</h1>
            <p>Struktur dine planer</p>
          </div>
        </header>
        <section className='add-todo-section'>
          <form className='form' onSubmit={submitTodo}>
            <input
              type='text'
              id='title'
              name='title'
              value={state.title}
              onChange={(e) => changeValue(e)}
              placeholder='Title'
            />
            <input
              type='text'
              id='desc'
              name='desc'
              value={state.desc}
              style={{ height: '100px' }}
              onChange={(e) => changeValue(e)}
              placeholder='Todo'
            />
            <button type='submit'>Tilføj todo</button>
          </form>
        </section>

        <ListTodos todos={state.todos} removeTodo={removeTodo} />

        <div className='footer'>
          <div className='socials-logos-container'>
            <div className='logo-item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              <p>Simonsejse</p>
            </div>
            <div className='logo-item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
              </svg>
              <p>WintherAL</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default App;
