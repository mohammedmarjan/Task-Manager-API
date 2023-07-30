# Task Management API

This is a simple Task Management API that allows users to manage tasks. The API supports CRUD (Create, Read, Update, Delete) operations for tasks, along with filtering, sorting, and priority level assignment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Request and Response Examples](#request-and-response-examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

2. Clone this repository:

git clone https://github.com/your-username/task-api.git
cd task-api


3. Install dependencies:

npm install


4. Start the server:

npm start


The server will run on http://localhost:3000 by default. You can change the port in the `app.js` file if needed.

## Usage

The API provides the following endpoints to interact with tasks:

- GET /tasks: Retrieve all tasks with filtering and sorting options.
- GET /tasks/:id: Retrieve a single task by its ID.
- POST /tasks: Create a new task with priority level.
- PUT /tasks/:id: Update an existing task by its ID.
- DELETE /tasks/:id: Delete a task by its ID.
- GET /tasks/priority/:level: Retrieve tasks based on priority level.

Please refer to the [Endpoints](#endpoints) section for detailed information about each endpoint and how to use them.

## Endpoints

### GET /tasks

Retrieve all tasks with filtering and sorting options.

Query Parameters:

- `completed` (optional): Filter tasks based on completion status. Accepts `true` or `false` as values.

### GET /tasks/:id

Retrieve a single task by its ID.

### POST /tasks

Create a new task with priority level.

Request Body:

```json
{
  "title": "Sample Task",
  "description": "This is a sample task.",
  "completed": false,
  "priority": "medium"
}

PUT /tasks/:id
Update an existing task by its ID.

Request Body:
{
  "title": "Updated Task",
  "description": "This is an updated task.",
  "completed": true,
  "priority": "high"
}

DELETE /tasks/:id
Delete a task by its ID.

GET /tasks/priority/:level
Retrieve tasks based on priority level.

Request and Response Examples
See the Endpoints section for request and response examples for each endpoint.