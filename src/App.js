import React, { useReducer, useState } from 'react'
import TaskManager from './components/taskManager'
import MyTest from './components/testComp'

import data from '../services/todolist.json'
import userlist from '../services/userlist.json'

export const UserContext = React.createContext();
export const ToDoContext = React.createContext();

const initialState = data.todoList;

const toDoReducer = (state, action) => {
    const id = action.payload;

    switch(action.type) {
        case 'ADD_NEW':
            state.push(action.payload);
            return [...state];
        case 'TASK_UPDATE':
            state[id].done = true;
            return [...state];
        case 'DELETE':
            const newState = state.filter((item, i) => i !== id);
            return [...newState];
        default:
            return [...state];
    }
};

const App = () => {

    const [toDoState, toDoDispatch] = useReducer(toDoReducer, initialState);

    const getUserToDo = (e) => {
        e.preventDefault();
        setUserState(document.getElementById('userIdText').value);
        console.log(document.getElementById('userIdText').value);
    };

    const [userIdValue, setUserState] = useState('');
    console.log('*************', toDoState);
    return (
        <section>
            <form onSubmit={getUserToDo}>
                <input type='text' id='userIdText' />
                <input type='submit'></input>
            </form>
            <UserContext.Provider value={userIdValue}>
                <ToDoContext.Provider value={{toDoDispatch, toDoState}}>
                    <TaskManager />
                </ToDoContext.Provider>
            </UserContext.Provider>
            <MyTest></MyTest>
        </section>
    );
}

export default App;
