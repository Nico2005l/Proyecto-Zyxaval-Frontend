import { useState } from "react";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mis Tareas</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Agregar una nueva tarea"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition-colors p-2"
        >
          Agregar
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border border-gray-300 rounded-lg">
            <span
              className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
            >
              {task.text}
            </span>
            <div className="lg:flex gap-2 grid">
              <button
                onClick={() => toggleTask(task.id)}
                className={`px-2 py-1 rounded-lg ${task.completed ? "bg-yellow-500 text-white" : "bg-green-500 text-white"} hover:bg-opacity-75 transition-colors`}
              >
                {task.completed ? "Deshacer" : "Completar"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};