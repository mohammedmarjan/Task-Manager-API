const taskRoutes = require('express').Router();
const validations = require('../helpers/validations')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
taskRoutes.use(bodyParser.json());

// In-memory data store for tasks
let tasks = [];

// GET /tasks: Retrieve all tasks
taskRoutes.get('/', (req, res) => {
   // Filter tasks based on completion status
  const { completed } = req.query;
  let filteredTasks = tasks;
  if (completed !== undefined) {
    const completionStatus = completed.toLowerCase() === 'true';
    filteredTasks = tasks.filter((task) => task.completed === completionStatus);
  }

  // Sort tasks by creation date (oldest to newest)
  filteredTasks.sort((a, b) => new Date(a.createdOn) - new Date(b.createdOn));

  res.status(200).json(filteredTasks);
})

// GET /tasks/:id: Retrieve a single task by its ID
taskRoutes.get('/:id', (req, res) => {
    const taskIdPassed = req.params.id;
    const task = tasks.find((task) => task.id === taskIdPassed);
    if (!task) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }

    return res.status(200).json(task)

})

// GET /tasks/priority/:level: Retrieve tasks based on priority level
app.get('/priority/:level', (req, res) => {
    const { level } = req.params;
    const priorityLevel = level.toLowerCase();
    const tasksWithPriority = tasks.filter((task) => task.priority.toLowerCase() === priorityLevel);
    res.json(tasksWithPriority);
  });

// POST /tasks: Create a new task
taskRoutes.post('/', (req, res) => {
    // Input validation
    if (!validations.isValidRequest(req.body)) {
        return res.status(400).json({
            error: 'Invalid input'
        });
    }
    
    const { title, description, completed } = req.body;
    const newTask = {
        id: uuidv4(),
        title,
        description,
        completed,
        priority,
        createdOn: new Date().toISOString(),
      };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Update an existing task by its ID
taskRoutes.put('/:id', (req, res) => {
    // Input validation
    if (!validations.isValidRequest(req.body)) {
        return res.status(400).json({
            error: 'Invalid input'
        });
    }

    const taskIdPassed = req.params.id;
    const taskIndex = tasks.findIndex((task) => task.id === taskIdPassed);
    if (taskIndex === -1) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }

    const { title, description, completed, priority } = req.body;
    const updatedTask = { ...tasks[taskIndex], title, description, completed, priority };
    tasks[taskIndex] = updatedTask;
    res.status(201).json(updatedTask);
});

// DELETE /tasks/:id: Delete a task by its ID
taskRoutes.delete('/:id', (req, res) => {
    const taskIdPassed = req.params.id;
    tasks = tasks.filter((task) => task.id !== taskIdPassed);
    res.status(204).send({
        message: "Task deleted successfully"
    });
});


module.exports = taskRoutes;
