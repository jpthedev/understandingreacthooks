import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TaskNav from '../taskNav';
import ToDoList from '../toDoList';
import {CardInfo} from '../addCard';

import './default.css'

class TaskManager extends Component {
    constructor(props) {

        super(props);
        this.navItems = [
            { 'name': 'My TO-DO', 'url': '/' },
            { 'name': 'Add TO-DO', 'url': '/add' },
            { 'name': 'Trashed Items', 'url': '/trash' }
        ];
    }

    static propTypes = {

    }

    render() {
        return (
            <div>
                <div className='title-wrapper'>
                    <section>
                    <h1>TO DO LIST</h1>
                    <p>Powered by MERN using React Hooks</p>
                    </section>
                </div>
                <Router>
                    <TaskNav navItems={this.navItems} />
                    <Switch>
                    <Route exact path='/' component={() => <ToDoList done={false} /> } />
                    <Route exact path='/add' component={CardInfo} />
                    <Route exact path='/trash' component={() => <ToDoList done={true} /> } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TaskManager;
