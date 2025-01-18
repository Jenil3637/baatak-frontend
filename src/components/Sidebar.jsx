// import React from "react";
// import { FaHeart, FaPlusCircle, FaUtensils, FaSignOutAlt, FaLayerGroup, FaCandyCane, FaWineBottle, FaShoppingCart } from "react-icons/fa";
// import logo from "../assets/logo.png"; // Import your logo image
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//     return (
//         <div className="lg:w-64 w-16 h-screen bg-white shadow-md flex flex-col justify-between transition-all duration-300 fixed top-0 left-0 z-50">
//             {/* Logo and Shopping Cart */}
//             <div className="p-4 flex items-center justify-between">
//                 <NavLink to="/" className="flex items-center">
//                     <img src={logo} alt="Logo" className="w-24 h-12 object-cover cursor-pointer" /> {/* Clickable logo */}
//                 </NavLink>
//                 <NavLink to="/AddToCart">
//                 <FaShoppingCart className="ml-auto text-xl text-gray-600 hover:text-orange-500 cursor-pointer transition-all hidden lg:block" />
//                 </NavLink>           
//             </div>

//             {/* Divider */}
//             <hr className="my-4 border-gray-300" />

//             {/* Menu Items */}
//             <nav className="flex-1 mt-[10px]">
//                 <ul>
//                     <li>
//                         <NavLink
//                             to="/favorites"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaHeart className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">Favourites</span>
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink
//                             to="/new"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaPlusCircle className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">New</span>
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink
//                             to="/lunch"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaUtensils className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">Lunch</span>
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink
//                             to="/combo"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaLayerGroup className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">Combos</span>
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink
//                             to="/sweet"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaCandyCane className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">Sweets</span>
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink
//                             to="/drink"
//                             className={({ isActive }) =>
//                                 `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
//                                     ? "bg-orange-100 text-orange-500"
//                                     : "hover:bg-orange-100 hover:text-orange-500"
//                                 }`
//                             }
//                         >
//                             <FaWineBottle className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
//                             <span className="font-medium hidden lg:block">Drinks</span>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>


//         </div>
//     );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { FaHeart, FaPlusCircle, FaUtensils, FaSignOutAlt, FaLayerGroup, FaCandyCane, FaWineBottle, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image
import { useCart } from "./CartContext"; // Assuming you have CartContext for managing cart

const Sidebar = () => {
    const { cart } = useCart(); // Use the CartContext to get the cart
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        console.log('Cart:', cart); // Debug: Log the cart data
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        console.log('Total Items in Cart:', totalItems); // Debug: Log the calculated total items
        setCartCount(totalItems);
    }, [cart]);

    return (
        <div className="lg:w-64 w-20 h-screen bg-white shadow-md flex flex-col justify-between transition-all duration-300 fixed top-0 left-0 z-50">
            {/* Logo and Shopping Cart */}
            <div className="p-4 flex items-center justify-between">
                <NavLink to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-16 h-6 lg:w-24 lg:h-12 object-cover cursor-pointer"
                    />
                    {/* Clickable logo */}
                </NavLink>
                <NavLink to="/AddToCart">
                    <div className="relative">
                        <FaShoppingCart className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer transition-all hidden lg:block lg:mr-[20px]" />
                        {cartCount > 0 && (
                            <span className="absolute bottom-1 right-0 text-x text-gray-600 hidden lg:block font-semibold">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </NavLink>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            {/* Menu Items */}
            <nav className="flex-1 mt-[10px]">
                <ul>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaHeart className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">Favourites</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/new"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaPlusCircle className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">New</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/lunch"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaUtensils className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">Lunch</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/combo"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaLayerGroup className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">Combos</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sweet"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaCandyCane className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">Sweets</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/drink"
                            className={({ isActive }) =>
                                `group flex items-center px-4 py-3 cursor-pointer transition-all ${isActive
                                    ? "bg-orange-100 text-orange-500"
                                    : "hover:bg-orange-100 hover:text-orange-500"
                                }`
                            }
                        >
                            <FaWineBottle className="mr-3 text-gray-600 group-hover:text-orange-500 transition-all" />
                            <span className="font-medium hidden lg:block">Drinks</span>
                        </NavLink>
                    </li>
                </ul>
            {/* Divider just after navbar */}
            <hr className="my-4 border-gray-300 block lg:hidden" />

            <NavLink to="/AddToCart">
                    <div className="relative">
                        <FaShoppingCart className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer ml-3 transition-all block lg:hidden lg:mr-[20px]" />
                        {cartCount > 0 && (
                            <span className="absolute bottom-1 right-9 text-x text-gray-600 block lg:hidden font-semibold">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </NavLink>
            </nav>

        </div>
    );


};

export default Sidebar;
