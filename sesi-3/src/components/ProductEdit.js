import React from "react";
import { useState } from "react";

function ProductEdit({ product, saveEdit, cancelEdit }) {
  const initialFormState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  const [formData, setFormData] = useState(initialFormState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveEdit(product.id, formData);
  };
  const handelCancel = (e) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Ubah Produk</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="nama"
            value={nama}
            type="text"
            className="edit-input-text"
            placeholder="Nama Produk"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="deskripsi"
            value={deskripsi}
            type="text"
            className="edit-input-text"
            placeholder="Deskripsi Produk"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="imageURL"
            value={imageURL}
            type="text"
            className="edit-input-text"
            placeholder="Gambar Produk"
          />
        </div>
        <input
          type="submit"
          className="edit-input-submit save"
          value="Simpan"
        />
        <button onClick={handelCancel} className="edit-input-submit cancel">
          Batal
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
