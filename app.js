const express = require('express');
const bodyParser = require('body-parser');
const routes = require('express').Router();
const taskInfo = require('./routes/tasksInfo')

const app = express();
app.use(routes)
app.use(bodyParser.json());

const PORT = 3000;

routes.get('/', (req, res) => {
    return res.status(200).send("Welcome to task manager api");
})

routes.use('/tasks', taskInfo)

app.listen(PORT, (error) => {
    if (!error) {
        console.log('server has started successfully');
    } else {
        console.log('server error: ' + error);
    }
})