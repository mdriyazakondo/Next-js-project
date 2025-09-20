"use client";

import { useRouter } from "next/navigation";

const ProductsAdd = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const productName = from.productName.value;
    const productsTitle = from.productsTitle.value;
    const productsPrice = from.productsPrice.value;
    const payload = { productName, productsTitle, productsPrice };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    from.reset();
    router.push("/products");
    router.refresh();
  };
  return (
    <div className="max-w-3xl mx-auto min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto space-y-3">
        <input
          type="text"
          name="productName"
          placeholder="Products Name"
          className="border border-gray-400 rounded-md pl-4 outline-none w-full py-1.5"
          required
        />

        <input
          type="text"
          name="productsTitle"
          placeholder="Products Title"
          className="border border-gray-400 rounded-md pl-4 outline-none w-full py-1.5"
          required
        />
        <input
          type="number"
          name="productsPrice"
          placeholder="Products Price"
          className="border border-gray-400 rounded-md pl-4 outline-none w-full py-1.5"
          required
        />
        <button
          type="submit"
          className="py-1.5 bg-green-500 px-8 rounded-md cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductsAdd;
