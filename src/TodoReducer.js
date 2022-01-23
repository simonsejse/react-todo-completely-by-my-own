import actions from './TodoReducerActions';

export const reducer = (state, action) => {
  if (action.type === actions.CHANGE_VALUE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === actions.RETRIEVE_TODO) {
    return {
      ...state,
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  }
  if (action.type === actions.REMOVE_TODO) {
    const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return {
      ...state,
      todos: newTodos,
    };
  }
  if (action.type === actions.ADD_TODO) {
    const newTodos = [...state.todos, action.payload];
    console.log(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return {
      ...state,
      title: '',
      desc: '',
      todos: newTodos,
    };
  }
  throw new Error('Nej bro du burde aldrig ende her? Wtf');
};
