import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/products.css"

export default function Products() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  return (
    <>
      <div className="header-of-title">
        <h1>Fruit:</h1>
        <Link to="/products/addProduct" className="link-to-addProductForm">Add product</Link>
      </div>
      <article>
        <h2 className="title">{value[0]?.name}</h2>
        <img src={value[0]?.url} />
        <p>{value[0]?.description}</p>
      </article>
      <Link to="/products"></Link>
    </>
  );
}
