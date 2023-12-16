import "./App.css";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate.js";
import { useState } from "react";
import { Products } from "./data/products.js";

function App() {
  const [products, setProducts] = useState(Products);
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 77777), ...product },
    ]);
  };
  const onEditProduct = (id, data) => {
    const updatedProduct = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    setProducts(updatedProduct);
  };
  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
