import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  addNewProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../firebase/productController";

const product = {
  name: "",
  price: "",
};

const Db = () => {
  //const [name, setName] = useState("");
  //const [price, setPrice] = useState("");
  const [product, setProduct] = useState({ name: "", price: "" });
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState("add");

  const createNewProduct = async () => {
    //console.log(product);
    await addNewProduct(product);
    setProduct({ name: "", price: "" });
    /*getProducts()
      .then((p) => setProducts([...p]))
      .catch((e) => console.error(e));*/
    initializeProducs();
  };

  const initializeProducs = () => {
    getProducts()
      .then((p) => setProducts([...p]))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    /*getProducts()
      .then((p) => setProducts([...p]))
      .catch((e) => console.error(e));*/
    initializeProducs();
  }, []);

  const editProduct = (id) => {
    setMode("update");
    const productToEdit = products.find((p) => p.id === id);
    setProduct({ ...productToEdit });
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    initializeProducs();
  };

  const updateExistingProduct = async () => {
    await updateProduct(product);
    setProduct({ name: "", price: "" });
    initializeProducs();
  };

  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Name"
          className="border shadow outline-none focus:ring ring-sky-600 rounded px-2 py-1"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          className="border shadow outline-none focus:ring ring-sky-600 rounded px-2 py-1"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button
          className="bg-sky-500 text-white py-1 px-3 rounded shadow hover:bg-sky-700 transition"
          //onClick={createNewProduct}
          onClick={() =>
            mode === "add" ? createNewProduct() : updateExistingProduct()
          }
        >
          {mode === "add" ? "ADD" : "UPDATE"}
        </button>
      </div>
      {/*<button onClick={getProducts}>Products</button>*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-sky-600 p-4 flex flex-col gap-2"
          >
            <h1 className="font-semibold">NAME: {product.name} </h1>
            <div className="border-t border-sky-600"></div>
            <p className="font-semibold">PRICE: {product.price}</p>
            <div className="border-t border-sky-600"></div>
            <div className="flex  justify-between">
              <button
                className="bg-sky-500 text-white py-1 px-3 rounded shadow hover:bg-sky-700 transition"
                onClick={() => editProduct(product.id)}
              >
                EDIT
              </button>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded shadow hover:bg-sky-700 transition"
                onClick={() => removeProduct(product.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Db;
