import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import data from "../data";
const ProductDetail = () => {
  const productId = useParams();
  const productDetail = data.filter((item) => item.id == productId.id);
  const product = productDetail[0];
  const [cartText, setCartText] = useState("Add to cart");

  const disPatch = useDispatch();
  const handleAddToCart = (product) => {
    if (cartText === "Add to cart") {
      disPatch(addItem(product));
      setCartText("Move from cart");
    } else {
      disPatch(delItem(product));

      setCartText("Add to cart");
    }
  };
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img className="detail-img" src={product.img} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">$ {product.price}</h2>
            <p>{product.desc}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
