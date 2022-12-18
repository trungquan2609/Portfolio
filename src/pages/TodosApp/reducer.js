import { ACTION } from './action';

const reducerTodo = (todos, action) => {
    let todoList;
    switch (action.type) {
        case ACTION.ADD_TODO:
            todoList = [...todos, newTodo(action.payload.todo)];
            localStorage.setItem('todosList', JSON.stringify(todoList));
            return todoList;
        case ACTION.EDITING_TODO:
            todoList = todos.map((todo) => {
                todoList = {
                    ...todo,
                    editing: false,
                };
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        editing: true,
                    };
                }
                return todoList;
            });
            return todoList;
        case ACTION.EDITED_TODO:
            todoList = todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        editing: false,
                        todo: action.payload.todo,
                    };
                }
                return todo;
            });
            return todoList;

        case ACTION.CANCEL_EDIT_TODO:
            return todos.map((todo) => {
                return { ...todo, editing: false };
            });
        case ACTION.DELETE_TODO:
            todoList = todos.filter((todo) => todo.id !== action.payload.id);
            localStorage.setItem('todosList', JSON.stringify(todoList));
            return todoList;
        case ACTION.COMPLETE_TODO:
            todoList = todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        editing: false,
                        complete: !todo.complete,
                    };
                }
                return todo;
            });
            localStorage.setItem('todosList', JSON.stringify(todoList));
            return todoList;
        default:
            return console.log('wrong action type');
    }
};

const newTodo = (todo) => {
    return {
        id: Date.now(),
        todo: todo,
        editing: false,
        complete: false,
    };
};

export default reducerTodo;
