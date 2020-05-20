import React, {useState, useContext} from 'react'
import AddFileds from '../../hooks/AddFeilds'
import { UserContext, ToDoContext } from '../../App'
import './default.css'


const AddCard = () => {

    const [titleField, bindTitleField, resetTitle] = AddFileds('');
    const [descriptionField, bindDescription, resetDescription] = AddFileds('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toDoDispatch({type: 'ADD_NEW', payload: {title: titleField, description: descriptionField, userId: Number(userIdValue), done: false}});
    }

    const userIdValue = useContext(UserContext);
    const todoConsumer = useContext(ToDoContext);
    const toDoDispatch = todoConsumer.toDoDispatch;

    return (
        <section className='addCard'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Add To-Do</h2>
                </div>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input name='title' type='text' {...bindTitleField} />
                </div>
                <div>
                    <label htmlFor='description'> Description: </label>
                    <textarea name='description'  {...bindDescription} />
                </div>
                <div>
                    <input className='cta' type="submit" />
                </div>
            </form>
        </section>
    )
}

export const CardInfo = React.memo(AddCard);