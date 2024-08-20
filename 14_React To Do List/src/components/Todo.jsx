import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todo, settodo] = useState("");
  const [tasks, settasks] = useState([]);

  //storing the tasks to the local storage in json
  const saveToLS = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //accessing the tasks and then parse it into the string
  useEffect(() => {
    let toDoString = localStorage.getItem("tasks");
    if (toDoString) {
      let todos = JSON.parse(toDoString);
      settasks(todos);
    }
  }, []);

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleSubmit = () => {
    let newTasks = [...tasks, { id: uuidv4(), todo }];
    settasks(newTasks);
    console.log(todo);
    console.log("btn clicked");
    settodo("");
    saveToLS(newTasks);
  };

  const handleDelete = (id) => {
    console.log(id);
    let newTodos = tasks.filter((item) => {
      return item.id !== id;
    });
    settasks(newTodos);
    saveToLS(newTodos);
  };

  const handleEdit = (id) => {
    // Find the task with the matching id
    let t = tasks.find((item) => item.id === id);

    if (t) {
      // If a task is found, set the input field with the task's current value
      settodo(t.todo);
    }
    // Filter out the task being edited from the tasks array
    let newTodos = tasks.filter((item) => item.id !== id);
    console.log(newTodos);

    // Update the state with the remaining tasks
    settasks(newTodos);
    saveToLS(newTodos);
  };

  //clear all function
  const handleClearAll = () => {
    settasks([]);
    localStorage.clear();
    // saveToLS()
  };

  return (
    <div className="container my-5">
      <div className="mb-4 text-center">
        <h1 className="display-4 text-primary">TODO LIST</h1>
        <p className="text-muted">Manage Your Tasks Here</p>
      </div>

      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          type="text"
          className="form-control shadow-sm"
          id="todo-list"
          placeholder="Add Your tasks here"
          value={todo}
        />
        <button onClick={handleSubmit} className="btn btn-primary shadow-sm">
          Add Task
        </button>
      </div>

      <div className="text-center mb-4">
        <button
          onClick={() => handleClearAll()}
          className="btn btn-warning btn-lg shadow-sm"
          style={{ width: "200px" }}
        >
          Clear All
        </button>
      </div>

      <div className="tasksArea p-4 bg-light shadow-sm rounded">
        {tasks.length === 0 && (
          <div className="text-center text-secondary">
            <i className="fas fa-tasks fa-2x mb-3"></i>
            <p>No Tasks To Show</p>
          </div>
        )}
        {tasks.map((item) => {
          return (
            <div
              key={item.id}
              className="taskContent p-3 mb-2 bg-white rounded d-flex justify-content-between align-items-center shadow-sm"
            >
              <h4 className="mb-0 text-dark">{item.todo}</h4>
              <div className="d-flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-outline-success btn-sm"
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
