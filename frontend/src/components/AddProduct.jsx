import "../styles/addProduct.css";

export default function AddProduct() {
  return (
    <div className="wrapper-for-form">
      <form action="/api/products/addProduct" method="post">
        <h2>Add your own product</h2>
        <div>
          <label htmlFor="name-inp">Enter name of product</label>
          <input type="text" name="name-inp" id="name-inp" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="description-inp">Enter description:</label>
          <input
            type="text"
            name="desc-inp"
            id="desc-inp"
            placeholder="description"
          />
        </div>
        <div>
          <label htmlFor="url-inp">Enter URL for picture:</label>
          <input type="text" name="url-inp" id="url-inp" placeholder="URL" />
        </div>
        <div className="button-div">
            <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
