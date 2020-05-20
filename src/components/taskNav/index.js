import React from 'react'
import {NavLink} from 'react-router-dom'
import './default.css'

 const TaskNav = ({navItems}) => {

    return (
        <ul className='taskNav'>
            {navItems.map((item, id) =>
                <li key={id}><NavLink exact to={item.url}>{item.name}</NavLink></li>
            )}
        </ul>
    )
}

export default TaskNav;