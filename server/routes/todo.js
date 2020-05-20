const express = require('express');
const router = express.Router();
const Joi = require('joi');

const todoList = [
    {   "id": 1,
        "title": "Buy pair of shoes",
        "description": "Buy new pair of nike shoes in blue colour",
        "userId": 36,
        "done": false
    },
    {   
        "id": 2,
        "title": "Plan for the movie",
        "description": "book the tickets for joker movie",
        "userId": 31,
        "done": false
    },
    {
        "id": 3,
        "title": "book bus ticket",
        "description": "book the bus ticket from chennai to baglore for diwali",
        "userId": 39,
        "done": false
    },
    {
        "id": 4,
        "title": "tour plan",
        "description": "arrange the winter vacation trip to north east",
        "userId": 36,
        "done": false
    },
    {
        "id": 5,
        "title": "learn new",
        "description": "try to learn somehting new",
        "userId": 36,
        "done": true
    },
    {
        "id": 6,
        "title": "go to gym",
        "description": "join thr nearest gym for the cardio",
        "userId": 31,
        "done": true
    },
    {
        "id": 7,
        "title": "learn new",
        "description": "try to learn somehting new",
        "userId": 16,
        "done": false
    },
    {
        "id": 8,
        "title": "go to gym",
        "description": "join thr nearest gym for the cardio",
        "userId": 26,
        "done": false
    },
    {
        "id": 9,
        "title": "eat pizza",
        "description": "try to learn somehting new",
        "userId": 16,
        "done": true
    },
    {
        "id": 10,
        "title": "visit malasiya",
        "description": "join thr nearest gym for the cardio",
        "userId": 26,
        "done": true
    }
];

let userID = 0;

setUserId = (id) => {
    return new Promise((resolve, reject) => {
        userID = id;
        resolve(id);
    });
}

addTodo = (obj) => {
    return new Promise((resolve, reject) => {
    
        let newId = todoList.reduce((id, item) => {
            return id.id > item.id ? id : item;
        }).id || 0;

        obj.id = newId + 1;
        todoList.push(obj);
    
        resolve('added');
    });
}

validateToDo = (data) => {
    const schema = {
        userId: Joi.number().required(),
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        done: Joi.boolean().required()
    }

    return Joi.validate(data, schema);
}

getToDoList = () => {

    const data = todoList.filter((item) => {
        return item.userId == userID
    });

    return data;
}

// GET
router.get('/:userId', (req, res) => {
    const userId = Number(req.params.userId);

    setUserId(userId).then((id) => {
        if (id > 0) {
            const data = getToDoList();
        
            res.send({data, errors: []});
        } else {
            res.status(400).send({data: {}, errors: [{'code': 102, 'msg': 'No records'}]});
        }
    });    
});

// POST
router.post('/', (req, res) => {

    const result = validateToDo(req.body);

    if (result.error) {
        return res.status(400).send({error: result.error, data: {}});
    }

    addTodo(req.body).then((status) => {
        const data = getToDoList();

        res.send({error: {}, data});
    });
});

// PUT 
router.put('/', (req, res) => {
    const result = validateToDo(req.body);

    if (result.error) {
        return res.status(400).send({error: result.error, data: {}});
    }

    todoList.push(req.body);

    const data = getToDoList(req.body.userId);

    res.send({error: {}, data});
});

// DELETE
router.delete('/:postId', (req, res) => {
    const userId = Number(req.params.userId);

    todoList = todoList.filter((item) => {
        return item.userId !== userId;
    });
});

module.exports = router;