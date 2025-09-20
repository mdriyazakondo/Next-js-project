"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const productData = async () => {
      const res = await fetch("http://localhost:3000/api/items", {
        cache: "force-cache",
      });
      const products = await res.json();
      setProductsData(products);
    };
    productData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const deleteData = productsData.filter((p) => p._id !== id);
        setProductsData(deleteData);
      } else {
        console.error("falid to delete Data");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto mt-12 ">
      {productsData.map((product) => {
        return (
          <div key={product._id} className="shadow p-4 space-y-2 ">
            <h2 className="text-2xl text-gray-700 font-semibold">
              {product.productName}
            </h2>
            <p className="font-semibold text-gray-600">
              {product.productsTitle}
            </p>
            <p className="text-gray-600  text-center py-1.5 bg-green-300 rounded-md w-1/4">
              $ {product.productsPrice}
            </p>
            <button
              onClick={() => handleDelete(product._id)}
              className="py-1.5 px-6 rounded-md mt-2 bg-red-500 text-white cursor-pointer"
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
