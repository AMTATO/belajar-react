import React from "react";
import { useState } from "react";

const ProductCreate = ({ onCreateProduct }) => {
  const initialFormState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const { nama, deskripsi, imageURL } = formData;

  const addProduct = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button className="edit-input-submit add-toggle" onClick={addProduct}>
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">Add product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Nama Produk"
              name="nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Deskripsi Produk"
              name="deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Gambar Produk"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
