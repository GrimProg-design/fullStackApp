import { useEffect, useState } from "react";
import "../styles/tasks.css";
import "../styles/body-main.css";

export default function TasksChange() {
  const [value, setValue] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit(e, id) {
    e.preventDefault();

    fetch(`api/products/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((res) => setValue(res));
  }

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  return value.map((task) => (
    <form
      key={task._id}
      className="change-form"
      onSubmit={() => handleSubmit(task._id)}
    >
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
        <textarea name="description" id="" defaultValue={task.name}></textarea>
        <div className="buttons">
          <button className="back-button">back</button>
          <button className="send-change" type="submit">
            Send Change
          </button>
        </div>
      </article>
    </form>
  ));
}
