// 'use client' /* Thêm vào để Fix lỗi Event handler cannot be pased to Client Component props */
import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className="container mx-auto">
        <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
          {/* <AddToCart /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
