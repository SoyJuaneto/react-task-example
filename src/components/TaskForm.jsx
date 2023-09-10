import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-2">TAREAS</h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slade-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        ></input>
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-slade-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white w-full rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
