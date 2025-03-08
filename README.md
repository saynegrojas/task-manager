# Task Manager App

A simple task management application built using React and Redux.

---

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [API Documentation](#api-documentation)

---

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
`https://github.com/saynegrojas/task-manager.git`

2. **Install dependencies**:
`npm install`
 
1. **Start the application**:

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Features

- **Task Creation**: Users can create new tasks by filling out a form with the task's title, description, and status.
- **Task Completion Update**: Existing tasks can be edited by clicking on them and marks tasks as complete.
- **Task Deletion**: Tasks can be deleted by clicking on the "Delete" button next to each task.
- **Toggle Theme**: Toggle between light and dark mode themes.

---

## Usage

To use this application:

1. Navigate to the root directory of the project.
2. Start the development server using `npm run dev`.
3. Open your browser and go to [http://localhost:5173](http://localhost:5173).

You can interact with the app by:
- Creating new tasks using the input field.
- Deleting tasks by clicking on the "Delete" button next to each task.
- Mark tasks as complete by clicking on the task name.
- Click the theme button to switch from light to dark mode.

---

## API Documentation

The following APIs are available for managing tasks:

### 1. `Create a new task`

- **Parameters**:
- `text` (string): The text of the task.
- `status` (boolean): The status of the task (e.g., "Completed").
- get stored in localstorage.
- **Returns**: The newly created task object.

---

### 2. `Mark an existing task as complete`

- **Parameters**: 
- `id` (string): The id of the task.
- updates the status of the task as complete in localstorage.
- **Returns**: An array of task objects.

---

### 3. `Delete a task by its ID`

- **Parameters**:
- `id` (string): The ID of the task to delete.
- removes the task from localstorage.
- **Returns**: None.

---

### 3. `Toggle theme`

- **Parameters**:
- (): Toggle theme between light and dark mode.
- Persists theme in localstorage, even after refreshing the page.
- **Returns**: None.
