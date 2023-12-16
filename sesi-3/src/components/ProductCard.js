import React from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;
  const [basket, setBasket] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

  const addBasket = () => {
    setBasket(basket + 1);
  };

  const minBasket = () => {
    setBasket(basket - 1);
  };

  const handelDelete = () => {
    onDeleteProduct(id);
  };

  const handleShow = () => {
    setShowEdit(!showEdit);
  };

  const saveEdit = (id, data) => {
    onEditProduct(id, data);
    setShowEdit(false);
  };

  const cancelEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit
          product={product}
          saveEdit={saveEdit} 
          cancelEdit={cancelEdit}
        />
      ) : (
        <>
          <div className="edit-delete">
            <AiTwotoneEdit onClick={handleShow} className="icon-edit" />
            <MdDeleteForever onClick={handelDelete} className="icon-delete" />
          </div>
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0 0",
            }}
            src={imageURL}
            alt=""
          />
          <div className="container">
            <h4>
              <b>{nama}</b>
            </h4>
            <p>{deskripsi}</p>
          </div>

          <div
            className={`card-keranjang ${
              basket > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {basket > 0 ? (
              <>
                <button onClick={minBasket} className="button">
                  -
                </button>
                <div>{basket}</div>
                <button onClick={addBasket} className="button">
                  +
                </button>
              </>
            ) : (
              <div onClick={addBasket} className="keranjang">
                + Keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
