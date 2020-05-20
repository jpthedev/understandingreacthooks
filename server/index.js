const express = require('express');
const app = express();
const toDoRoute = require('./routes/todo');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('To Do Server'); 
});

app.use('/api/todolist', toDoRoute);

// GET
app.get('/api/todolist/:userId', (req, res) => {
    const userId = Number(req.params.userId);

    if (userId > 0) {
        const data = getToDoList(userId);
    
        res.send({data, errors: []});
    } else {
        res.status(400).send({data: {}, errors: [{'code': 102, 'msg': 'No records'}]});
    }
});

// POST
app.post('/api/todolist', (req, res) => {

    const result = validateToDo(req.body);

    if (result.error) {
        return res.status(400).send({error: result.error, data: {}});
    }

    todoList.push(req.body);

    const data = getToDoList(req.body.userId);

    res.send({error: {}, data});
});

// PUT 
app.put('/api/todolist', (req, res) => {
    const result = validateToDo(req.body);

    if (result.error) {
        return res.status(400).send({error: result.error, data: {}});
    }

    todoList.push(req.body);

    const data = getToDoList(req.body.userId);

    res.send({error: {}, data});
});

// DELETE
app.delete('/api/todolist/:userId', (req, res) => {
    const userId = Number(req.params.userId);

    todoList = todoList.filter((item) => {
        return item.userId !== userId;
    });
});

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`i m wating on ${port} ...`);
});