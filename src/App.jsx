import { Table } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [infos, setInfos] = useState([]);

  const fetchFunction = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos ");
    const data = await res.json();

    setInfos(data);
  };

  // console.log(value)
  useEffect((_) => {
    fetchFunction();
  }, []);

  return (
    <section className="m-10">
      <table className="border-collapse border">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info) => (
            <tr key={info.id } className="even:bg-slate-200 ">
              <td className="">{info.id}</td>
              <td className="">{info.title}</td>
              <td>{info.completed ? "Done": "Not yet"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default App;
