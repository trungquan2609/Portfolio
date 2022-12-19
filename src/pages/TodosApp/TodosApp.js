/* eslint-disable no-const-assign */
import { useReducer, useState, useRef, useCallback, Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { ACTION } from './action';
import reducerTodo from './reducer';
import styles from './TodosApp.module.scss';

const cx = classNames.bind(styles);

function TodosApp() {
    const getStoreTodos = useCallback(() => {
        const storeTodos = JSON.parse(localStorage.getItem('todosList')) || [];
        return storeTodos;
    }, []);
    const [inputAdd, setInput] = useState('');
    const [editInput, setEditInput] = useState('');
    const [activeTab, setActiveTab] = useState(ACTION.FILTER_ALL);
    const [isCompleteAllTab, setIsCompleteAllTab] = useState(true);
    const [todos, dispatchTodo] = useReducer(reducerTodo, getStoreTodos());
    // const [data, setData] = useState(todos);

    const inputRef = useRef();
    const editInputRef = useRef();
    const completeAllRef = useRef();

    useEffect(() => {
        if (activeTab !== ACTION.FILTER_FINISHED) {
            const storeLengthTodo = todos.length;
            const finishedLengthTodo = todos.filter((todo) => todo.complete === true).length;
            if (storeLengthTodo === finishedLengthTodo && completeAllRef) {
                completeAllRef.current.checked = true;
            } else {
                completeAllRef.current.checked = false;
            }
        }
    }, [todos, activeTab]);

    const handleAdd = () => {
        if (inputAdd.trim() !== '' && !inputAdd.trim().startsWith(' ')) {
            dispatchTodo({ type: ACTION.ADD_TODO, payload: { todo: inputAdd } });
            setInput('');
        } else {
            setInput('');
        }
        inputRef.current.focus();
        handleActionClick(ACTION.FILTER_ALL);
    };
    const handleSubmitAdd = (e) => {
        e.preventDefault();
        handleAdd();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
    };

    const handleEdit = (id) => {
        setEditInput('');
        dispatchTodo({ type: ACTION.EDITING_TODO, payload: { id } });
    };

    const handleEdited = (id) => {
        if (editInput.trim() !== '' && !editInput.trim().startsWith(' ')) {
            dispatchTodo({ type: ACTION.EDITED_TODO, payload: { id, todo: editInput } });
        } else {
            setEditInput('');
        }
        editInputRef.current.focus();
    };

    const handleEditCancel = (id) => {
        setEditInput('');
        dispatchTodo({ type: ACTION.CANCEL_EDIT_TODO, payload: { id } });
    };

    const handleComplete = (id) => {
        dispatchTodo({ type: ACTION.COMPLETE_TODO, activeTab, payload: { id } });
    };

    const handleDelete = (id) => {
        dispatchTodo({ type: ACTION.DELETE_TODO, payload: { id } });
    };

    const handleCompleteAll = () => {
        dispatchTodo({ type: ACTION.COMPLETE_ALL_TODO, activeTab });
    };

    const handleActionClick = (action) => {
        setActiveTab(action);
        setIsCompleteAllTab(action !== ACTION.FILTER_FINISHED);
        dispatchTodo({ type: action });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <h1>Todo App</h1>
                </div>
                <form
                    onSubmit={handleSubmitAdd}
                    className={cx('form')}
                >
                    <input
                        ref={inputRef}
                        value={inputAdd}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className={cx('input-todo')}
                        placeholder="Add todo..."
                    />
                    <Button
                        onClick={handleAdd}
                        type="Add"
                    />
                </form>
                <div className={cx('todo-list')}>
                    {todos.map((todo, index) => {
                        return (
                            <div
                                className={cx('todo-item')}
                                key={index}
                            >
                                <div className={cx('show-todo')}>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        onChange={() => handleComplete(todo.id)}
                                        checked={todo.complete}
                                        className={cx('checkbox-todo')}
                                    />
                                    <p
                                        style={{ color: todo.complete ? '#AAA' : '#000' }}
                                        className={cx('desc-todo', todo.complete ? 'complete' : '')}
                                    >
                                        {todo.todo}
                                    </p>
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className={cx('edit-btn')}
                                        onClick={() => handleEdit(todo.id)}
                                    />
                                    <span
                                        onClick={() => handleDelete(todo.id)}
                                        className={cx('delete-todo')}
                                    >
                                        &times;
                                    </span>
                                </div>
                                {todo.editing && !todo.complete && (
                                    <div className={cx('edit-todo')}>
                                        <form
                                            onSubmit={(e) => {
                                                handleEditSubmit(e);
                                                handleEdited(todo.id);
                                            }}
                                        >
                                            <input
                                                value={editInput}
                                                ref={editInputRef}
                                                autoFocus
                                                type="text"
                                                className={cx('edit-input')}
                                                placeholder="Edit todo..."
                                                onChange={(e) => setEditInput(e.target.value)}
                                            />
                                        </form>
                                        <div className={cx('action-edit')}>
                                            <Button
                                                type="Edit"
                                                onClick={() => handleEdited(todo.id)}
                                            />
                                            <Button
                                                type="Cancel"
                                                onClick={() => handleEditCancel(todo.id)}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <footer className={cx('footer')}>
                    <div className={cx('check-all')}>
                        {isCompleteAllTab && (
                            <Fragment>
                                <input
                                    type="checkbox"
                                    ref={completeAllRef}
                                    className={cx('checkbox-todo')}
                                    onChange={handleCompleteAll}
                                />
                                <span
                                    className={cx('desc')}
                                    onClick={handleCompleteAll}
                                >
                                    Complete all
                                </span>
                            </Fragment>
                        )}
                    </div>
                    <div className={cx('action')}>
                        <span
                            className={cx('action-item', activeTab === ACTION.FILTER_ALL ? 'active' : '')}
                            onClick={() => handleActionClick(ACTION.FILTER_ALL)}
                        >
                            All
                        </span>
                        <span
                            className={cx('action-item', activeTab === ACTION.FILTER_DOING ? 'active' : '')}
                            onClick={() => handleActionClick(ACTION.FILTER_DOING)}
                        >
                            Doing
                        </span>
                        <span
                            className={cx('action-item', activeTab === ACTION.FILTER_FINISHED ? 'active' : '')}
                            onClick={() => handleActionClick(ACTION.FILTER_FINISHED)}
                        >
                            Finished
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default TodosApp;
