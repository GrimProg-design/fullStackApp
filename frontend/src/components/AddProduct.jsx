import "../styles/addProduct.css";
import { useState } from "react";

export default function AddProduct() {
    const [form, setForm] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/api/products/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((data) => setForm(data))
      .catch((err) => console.error(err));
  }

  return (
    <div className="wrapper-for-form">
      <form onSubmit={handleSubmit}>
        <h2>Add your own task</h2>
        <div>
          <label htmlFor="name-inp">Enter task</label>
          <input type="text" name="name" id="name-inp" placeholder="Task" />
        </div>
        <div>
          <label htmlFor="description-inp">Enter description of task:</label>
          <textarea
            type="text"
            name="description"
            id="desc-inp"
            placeholder="description"
          ></textarea>
        </div>
        <div className="button-div">
          <button type="submit">Submit</button>
        </div>
      </form>
      <h3 className="responce">{form}</h3>
    </div>
  );
}
