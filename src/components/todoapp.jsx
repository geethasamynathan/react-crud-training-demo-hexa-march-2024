import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TodoApp() {
  const [todoTask, setTodoTask] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  useEffect(() => {
    fetchTodoTasks();
  }, []);

  const fetchTodoTasks = async () => {
    try {
      const response = await axios.get("https://localhost:7252/api/ToDoTasks");
      setTodoTask(response.data);
    } catch (error) {
      console.error("Error while fetching TodoTaks " + error);
    }
  };

  const handleCreateTodoTask = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7252/api/ToDoTasks",
        {
          taskId: 10,
          title: newTodoTitle,
          completed: false,
        }
      );
      setTodoTask([...todoTask, response.data]);
      setNewTodoTitle("");
    } catch (error) {
      console.error("Error while Adding TodoTaks " + error);
    }
  };
  const handleDeleteTodoTask = async (id) => {
    console.log("id " + id);
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/ToDoTasks/${id}`
      );
      fetchTodoTasks();
    } catch (error) {
      console.error("Error while Deleting TodoTaks " + error);
    }
  };
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
        />
        <button className="btn btn-success" onClick={handleCreateTodoTask}>
          Add Task
        </button>
        {/* <table className="table table-dark">
          <thead>
            <tr>
              <th>TaskId</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoTask.map((todo) => (
              <tr key={todo.taskId}>
                <td>{todo.taskId}</td>
                <td>{todo.title}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={(event) => handleDeleteTodoTask(todo.taskId)}
                  >
                    <span className="glyphicon glyphicon-remove-circle">X</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
}
