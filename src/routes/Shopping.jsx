import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  addNewProduct,
  getProducts,
  //updateProduct,
  //deleteProduct,
} from "../firebase/productController";

const product = {
  name: "",
  price: "",
};

const Shopping = () => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [products, setProducts] = useState([]);
  //const [mode, setMode] = useState("add");

  /*const createNewProduct = async () => {
    await addNewProduct(product);
    setProduct({ name: "", price: "" });
    initializeProducs();
  };*/

  const initializeProducs = () => {
    getProducts()
      .then((p) => setProducts([...p]))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    initializeProducs();
  }, []);

  /*const editProduct = (id) => {
    setMode("update");
    const productToEdit = products.find((p) => p.id === id);
    setProduct({ ...productToEdit });
  };*/

  /*const removeProduct = async (id) => {
    await deleteProduct(id);
    initializeProducs();
  };*/

  /*const updateExistingProduct = async () => {
    await updateProduct(product);
    setProduct({ name: "", price: "" });
    initializeProducs();
  };*/

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-sky-600 p-4 flex flex-col gap-2"
          >
            <h1 className="font-semibold">NAME: {product.name} </h1>
            <div className="border-t border-sky-600"></div>
            <p className="font-semibold">PRICE: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
