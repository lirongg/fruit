import React, {useState}from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/c.ProductPage';
import ShoppingCart from './pages/c.ShoppingCart';
import CheckOut from './pages/c.CheckOut';
import OrderHistory from './pages/c.OrderHistory';
import Navbar from './components/Navbar'
import Dashboard from './pages/o.Dashboard';
import InventoryMgmt from './pages/o.InventoryMgmt';
import OrderSummary from './pages/o.OrderSummary';
import ProfilePage from './pages/ProfilePage'
import ToRespond from './pages/o.ChatToRespond'


function App() {
  const [userRole, setUserRole] = useState('owner'); 


  return (
<Router>
<div>
<Navbar userRole={userRole} />
<Routes>
{/*Public Routes */}
<Route path ="/" element ={<AuthPage setUserRole={userRole}/>}/>

{/* Customer Routes */}

{userRole === 'customer' &&(
  <>
<Route path ="/products" element ={<ProductPage />} />
<Route path ="/cart" element ={<ShoppingCart />} />
<Route path ="/checkout" element= {<CheckOut />} />
<Route path ="/orders" element= {<OrderHistory />} />
<Route path="/profile" element ={<ProfilePage />}/>
<Route path ="*" element ={<Navigate to="/ProductPage" />} />
</>
)}

{/* Owner Routes */}

{userRole === 'owner' &&(
  <>
<Route path ="/dashboard" element ={<Dashboard />} />
<Route path ="/inventory" element ={<InventoryMgmt />} />
<Route path ="/order-summary" element= {<OrderSummary />} />
<Route path="/profile" element ={<ProfilePage />}/>
<Route path="/chat" element ={<ToRespond />}/>
<Route path ="*" element ={<Navigate to="/dashboard" />} />
</>
)}

{/* Fallback to Auth if no role is set*/}
{!userRole && (
  <Route path="*" element = {<Navigate to="/" />}/>
)}

</Routes>
</div>
</Router>
  );
}

export default App;
