import React, {useContext} from 'react'
import {ToDoContext} from '../../App'
import './default.css'

 const CardDetail = ({item, id}) => {
    const toDoConsumer = useContext(ToDoContext);
    const toDoDispatch = toDoConsumer.toDoDispatch;

    const deleteTask = (e) => {
        // let newState = toDoConsumer.toDoState.filter((item, i) => i !== id);
        toDoDispatch({payload: id, type: 'DELETE'});
        // console.log('delete');
    }

    const taskComplete = (e) => {
        // let newState = toDoConsumer.toDoState;
        // newState[id].done = true;
        toDoDispatch({payload: id, type: 'TASK_UPDATE'});
        // console.log('complete', newState);
    }

    return (
        <div className='card'>
            <section className='card-title-wrapper'> 
                <div className='button-wrapper'>
                    { !item.done &&
                        <button className='done' onClick={taskComplete}>Done</button>
                    }
                    {item.done &&
                        <button className='remove' onClick={deleteTask}>Remove</button>
                    }
                </div>
                <h3>{item.title}</h3>
            </section>
            <p>{item.description}</p>
        </div>
    )
}

export default CardDetail