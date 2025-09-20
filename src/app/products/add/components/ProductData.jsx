"use client";

const ProductData = ({ product }) => {
  const handleDelete = (id) => {
    const deleteProduct = product.filter((products) => products._id !== id);
    return deleteProduct;
  };

  return (
    <div>
      <div className="shadow p-4 space-y-2 ">
        <h2 className="text-2xl text-gray-700 font-semibold">
          {product.productName}
        </h2>
        <p className="font-semibold text-gray-600">{product.productsTitle}</p>
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
    </div>
  );
};

export default ProductData;
