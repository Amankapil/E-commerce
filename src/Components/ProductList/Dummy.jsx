import React, { useEffect, useState } from "react";

import img from "../assets/Vector (1).png";
import img2 from "../assets/roman-koester-v53RV9LL5y0-unsplash 1.png";
import img3 from "../assets/spacejoy-IH7wPsjwomc-unsplash 1.png";
import img4 from "../assets/unsplash_2cFZ_FB08UM.png";
import img9 from "../assets/josh-nuttall-XVTWFHcNIko-unsplash 1.png";
import img5 from "../assets/Frame 64.png";
import img6 from "../assets/Frame 61 (1).png";
import img7 from "../assets/image 177.png";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    image: img,
    price: 10,
    category: "Category A",
    description: "Description of Product 1",
    reviews: [
      { id: 1, user: "User 1", review: "Great product!" },
      { id: 2, user: "User 2", review: "Good quality." },
    ],
    numberOfBuyers: 20,
  },
  {
    id: 2,
    name: "Product 2",
    image: img4,
    price: 20,
    category: "Category B",
    description: "Description of Product 2",
    reviews: [
      { id: 3, user: "User 3", review: "Excellent value for money." },
      { id: 4, user: "User 4", review: "Highly recommended!" },
    ],
    numberOfBuyers: 15,
  },
  {
    id: 3,
    name: "Product 3",
    image: img3,
    price: 30,
    category: "Category A",
    description: "Description of Product 3",
    reviews: [
      { id: 5, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 6, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 10,
  },
  {
    id: 4,
    name: "Product 4",
    image: img4,
    price: 30,
    category: "Category B",
    description: "Description of Product 4",
    reviews: [
      { id: 7, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 8, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 10,
  },
  {
    id: 5,
    name: "Product 5",
    image: img5,
    price: 30,
    category: "Category B",
    description: "Description of Product 5",
    reviews: [
      { id: 9, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 10, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 18,
  },
  {
    id: 6,
    name: "Product 6",
    image: img6,
    price: 1990,
    category: "Category C",
    description: "Description of Product 6",
    reviews: [
      { id: 11, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 12, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 180,
  },
  {
    id: 7,
    name: "Product 7",
    image: img7,
    price: 399,
    category: "Category C",
    description: "Description of Product 7",
    reviews: [
      { id: 13, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 14, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 180,
  },
  {
    id: 8,
    name: "Product 8",
    image: img9,
    price: 999,
    category: "Category C",
    description: "Description of Product 8",
    reviews: [
      { id: 15, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 16, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 89,
  },
  {
    id: 9,
    name: "Product 9",
    image: img2,
    price: 899,
    category: "Category A",
    description: "Description of Product 9",
    reviews: [
      { id: 17, user: "User 5", review: "Very satisfied with the purchase." },
      { id: 18, user: "User 6", review: "Fast shipping." },
    ],
    numberOfBuyers: 89,
  },
  // Add more dummy products as needed
];

const Dummy = () => {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const updatedTotalPrice = totalPrice + product.price;
    setTotalPrice(updatedTotalPrice);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const updatedTotalPrice = updatedCart.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };
  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const filteredProducts = filter
    ? productsData.filter((product) => product.category === filter)
    : productsData;

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 mt-20 bg-[#252628]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-white">Product List</h1>
        <button
          className="bg-[#3040d0] text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleCart}
        >
          Cart ({cart.length})
        </button>
      </div>
      <div className="mb-4">
        <select
          className="border border-gray-300 rounded px-3 py-2 outline-none"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          <option value="Category A">Shoe</option>
          <option value="Category B">Laptop</option>
          <option value="Category C">Begs</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded p-4 hover:scale-105 transition-all bg-slate-400"
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="mb-2 cursor-pointer  h-[200px]"
              onClick={() => handleProductClick(product)}
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>

            <div className="flex justify-between">
              <button
                className="bg-[#3040d0] text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                onClick={() => handleProductClick(product)}
              >
                View Details
              </button>
              <button
                className="bg-[#3040d0] text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-full">
          <div className="bg-slate-400 p-4 rounded max-w-lg relative w-full">
            <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="mb-2 cursor-pointer  h-[250px]"
                loading="lazy"
                // onClick={() => handleProductClick(product)}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700 mb-2">
              Price: ${selectedProduct.price}
            </p>
            <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
            <p className="text-gray-700 mb-2">
              Number of Buyers: {selectedProduct.numberOfBuyers}
            </p>
            <h3 className="text-lg font-semibold mb-2">Reviews:</h3>
            <ul>
              {selectedProduct.reviews.map((review) => (
                <li key={review.id} className="mb-2">
                  <p className="text-gray-700">
                    {review.user}: {review.review}
                  </p>
                </li>
              ))}
            </ul>

            <button
              className="bg-[#3040d0] text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-4">Cart</h2>

              <button onClick={() => setIsCartOpen(!isCartOpen)}>X</button>
            </div>

            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.name} - ${item.price}
                  </span>
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-semibold mt-4">Total Price: ${totalPrice}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-[#3040d0] text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dummy;
