import React from 'react';
import { useCart } from './CartContext';

const AddToCart = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

  // Calculate GST and total price
  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const gst = subtotal * 0.18; // 18% GST
    return {
      subtotal,
      gst,
      total: subtotal + gst,
    };
  };

  const { subtotal, gst, total } = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow rounded-lg space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-gray-600 hover:text-gray-800 px-2 py-1 rounded border border-gray-300"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-gray-600 hover:text-gray-800 px-2 py-1 rounded border border-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 px-2 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and GST */}
          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-gray-800 font-semibold">
              Subtotal: ₹{subtotal.toFixed(2)}
            </p>
            <p className="text-gray-800 font-semibold">
              GST (18%): ₹{gst.toFixed(2)}
            </p>
            <p className="text-gray-800 font-bold">
              Total: ₹{total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
