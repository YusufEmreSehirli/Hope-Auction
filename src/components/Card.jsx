import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [commission, setCommission] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const calculatedCommission = total * 0.05;
    setCommission(calculatedCommission);
  }, [cartItems]);

  const fetchCartItems = () => {
    axios
      .get("http://localhost:5000/basket")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        setCartItems([]);
      });
  };

  const removeFromCart = (id) => {
    axios
      .delete(`http://localhost:5000/basket/${id}`)
      .then((response) => {
        console.log("Item removed from cart:", response.data);
        fetchCartItems();
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Cart</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-10 object-cover"
                />
              </td>
              <td className="border px-4 py-2">
                {item.description ? item.description : item.title}
              </td>
              <td className="border px-4 py-2">${item.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" className="text-right font-bold">
              Total Price:
            </td>
            <td className="border px-4 py-2 font-bold">
              ${cartItems.reduce((total, item) => total + item.price, 0)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <p className="font-bold">Commission (5%):</p>
        <p>
          5% commission is taken from the total price of the items in your cart.
          This commission is used to support students in need.
        </p>
        <p className="font-bold">Commission Amount:</p>
        <p>${commission.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
