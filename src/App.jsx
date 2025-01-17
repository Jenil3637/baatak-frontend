// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import { CartProvider } from '../src/components/CartContext';
// import Sidebar from '../src/components/Sidebar';
// import Dashboard from '../src/components/Dashboard';
// import Favorites from '../src/components/Favourites';
// import Newww from '../src/components/Newww';
// import Lunch from '../src/components/Lunch';
// import Combo from '../src/components/Combo';
// import Sweet from '../src/components/Sweet';
// import Drink from '../src/components/Drink';
// import AddToCart from '../src/components/AddToCart';

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/new" element={<Newww />} />
//             <Route path="/lunch" element={<Lunch />} />
//             <Route path="/Combo" element={<Combo /> } /> 
//             <Route path="/Sweet" element={<Sweet /> } />
//             <Route path="/Drink" element={<Drink /> } />
//             <Route path="/AddToCart" element={<AddToCart />} />
//           </Routes>
//         </div>
//       </div>
//       </CartProvider>
//     </Router>
//   ); 
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/components/CartContext';
import Sidebar from '../src/components/Sidebar';
import Dashboard from '../src/components/Dashboard';
import Favorites from '../src/components/Favourites';
import Newww from '../src/components/Newww';
import Lunch from '../src/components/Lunch';
import Combo from '../src/components/Combo';
import Sweet from '../src/components/Sweet';
import Drink from '../src/components/Drink';
import AddToCart from '../src/components/AddToCart';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex">
          <Sidebar />
          {/* Add left margin to avoid overlap */}
          <div className="flex-1 p-4 ml-64"> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/new" element={<Newww />} />
              <Route path="/lunch" element={<Lunch />} />
              <Route path="/Combo" element={<Combo />} />
              <Route path="/Sweet" element={<Sweet />} />
              <Route path="/Drink" element={<Drink />} />
              <Route path="/AddToCart" element={<AddToCart />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
