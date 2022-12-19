import { ACTION } from './action';

const reducerTodo = (todos, action) => {
    let todoList = JSON.parse(localStorage.getItem('todosList')) || [];
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
            todoList = todoList.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        editing: false,
                        todo: action.payload.todo,
                    };
                }
                return todo;
            });
            localStorage.setItem('todosList', JSON.stringify(todoList));
            return todoList;

        case ACTION.CANCEL_EDIT_TODO:
            return todoList.map((todo) => {
                return { ...todo, editing: false };
            });
        case ACTION.DELETE_TODO:
            todoList = todos.filter((todo) => todo.id !== action.payload.id);
            localStorage.setItem('todosList', JSON.stringify(todoList));
            return todoList;
        case ACTION.COMPLETE_TODO:
            todoList = todoList.map((todo) => {
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
            switch (action.activeTab) {
                case ACTION.FILTER_DOING:
                    todoList = JSON.parse(localStorage.getItem('todosList'));
                    return todoList.filter((todo) => todo.complete === false);
                case ACTION.FILTER_FINISHED:
                    todoList = JSON.parse(localStorage.getItem('todosList'));
                    return todoList.filter((todo) => todo.complete === true);
                default:
                    break;
            }
            return todoList;
        case ACTION.COMPLETE_ALL_TODO:
            const todosLength = todoList.length;
            const todosCompleteLength = todoList.filter((todo) => todo.complete === true).length;
            if (todosCompleteLength === todosLength) {
                todoList = todoList.map((todo) => {
                    return {
                        ...todo,
                        editing: false,
                        complete: false,
                    };
                });
            } else {
                todoList = todoList.map((todo) => {
                    return {
                        ...todo,
                        editing: false,
                        complete: true,
                    };
                });
            }

            localStorage.setItem('todosList', JSON.stringify(todoList));
            switch (action.activeTab) {
                case ACTION.FILTER_DOING:
                    todoList = JSON.parse(localStorage.getItem('todosList'));
                    return todoList.filter((todo) => todo.complete === false);
                case ACTION.FILTER_FINISHED:
                    todoList = JSON.parse(localStorage.getItem('todosList'));
                    return todoList.filter((todo) => todo.complete === true);
                default:
                    break;
            }
            return todoList;
        case ACTION.FILTER_ALL:
            todoList = JSON.parse(localStorage.getItem('todosList'));
            return todoList;
        case ACTION.FILTER_DOING:
            todoList = JSON.parse(localStorage.getItem('todosList'));
            return todoList.filter((todo) => todo.complete === false);
        case ACTION.FILTER_FINISHED:
            todoList = JSON.parse(localStorage.getItem('todosList'));
            return todoList.filter((todo) => todo.complete === true);
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
