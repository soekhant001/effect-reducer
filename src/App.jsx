import { info } from "autoprefixer";
import React, { useRef, useState } from "react";

const App = () => {
  const ref = useRef();
  const [error, setError] = useState(false);
  const [task, setTask] = useState(null);

  const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const info = await res.json();
    setError(false);
    setTask(info);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (ref.current.value < 1) {
      setError(true);
      ref.current.value = null;
    } else {
      fetchData(ref.current.value);
      ref.current.value = null;
    }
  };
  
  return (
    <section className="m-10">
      <form action="" onSubmit={handleForm}>
        <input type="number" ref={ref} />
        <button type="submit" className="border bg-gray-300 px-4 py-2.5">
          {" "}
          Get Data
        </button>
      </form>
      <div>
        {error && (
          <h1 className="mt-3 text-xl">
            Please enter a valid number (eg.1,2,3...)
          </h1>
        )}
        {task && (
          <div>
            <h1 className="mt-3 text-xl">userId - {task.userId}</h1>
            <h1 className="mt-3 text-xl">id - {task.id}</h1>
            <h1 className="mt-3 text-xl">userId - {task.title}</h1>
            <h1 className="mt-3 text-xl">
              completed - {task.completed ? "Done" : "Not Yet"}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
