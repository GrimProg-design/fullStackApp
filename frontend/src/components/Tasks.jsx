import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/tasks.css";
import "../styles/body-main.css";

export default function Products() {
  const [value, setValue] = useState([]);
  const [change, setChange] = useState(true);
  const [text, setText] = useState("");

  function handleSubmit(e, id) {
    e.preventDefault();

    fetch(`api/products/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(res => setValue(res))
  }

  function handleDelete(id) {
    fetch(`api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setValue((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("Error of deleting: ", err));
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
        ) : change ? (
          value.map((task) => (
            <article key={task._id} className="task-item">
              <h2 className="title">{task.name}</h2>
              <p>{task.description}</p>
              <div className="buttons">
                <button
                  className="delete-button"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
                <button
                  className="change-button"
                  onClick={() => setChange(false)}
                >
                  Change
                </button>
              </div>
            </article>
          ))
        ) : (
          value.map((task) => (
            <form key={task._id} className="change-form" onSubmit={() => handleSubmit(task._id)}>
              <article key={task._id} className="task-item">
                <input
                  type="text"
                  name="name"
                  id="title-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onClick={() => console.log(text)}
                  placeholder="Enter name for new task"
                />
                <textarea
                  name="description"
                  id=""
                  defaultValue={task.name}
                ></textarea>
                <div className="buttons">
                  <button
                    className="back-button"
                    onClick={() => setChange(true)}
                  >
                    back
                  </button>
                  <button className="send-change" type="submit">
                    Send Change
                  </button>
                </div>
              </article>
            </form>
          ))
        )}
      </div>
    </div>
  );
}
