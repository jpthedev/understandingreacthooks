import React, {useContext} from 'react'
import CardDetail from '../cardDetail'
import { UserContext, ToDoContext } from '../../App'

import './default.css'

const toDoList = ({done}) => {
    const userIdValue = useContext(UserContext);
    const todoConsumer = useContext(ToDoContext);
    const todoList = todoConsumer.toDoState;

    console.log('uservalue', todoList);
    return (
        <div className='cardWrapper'>
            {todoList.map((item, id) => 
                userIdValue && userIdValue == item.userId && item.done == done && <CardDetail key={id} id={id} item={item} />
            )}
        </div>
    )
}

export default toDoList