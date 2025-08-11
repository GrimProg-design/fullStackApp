import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/tasks.css";
import "../styles/body-main.css"

export default function Products() {
  const [value, setValue] = useState([]);

  function handleDelete(id) {
    fetch(`api/products/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        setValue(prev => prev.filter(item => item._id !== id));
      })
      .catch(err => console.log("Error of deleting: ", err))
  }

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  return (
    <div className="wrapper-main">
      <div className="header-of-title">
        <h1 className="title-of-tasks">Tasks:</h1>
          <Link to="/products/addProduct" className="link-to-addProductForm">
            Add task
          </Link>
      </div>

      <div className="main2">
        {value.length === 0 ? (
          <p className="if-not-have-tasks">You don't have tasks Add them!</p>
        ) : (
          value.map((task) => (
            <article key={task._id} className="task-item">
              <h2 className="title">{task.name}</h2>
              <p>{task.description}</p>
              <button className="delete-button" onClick={() => handleDelete(task._id)}>Delete</button>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
