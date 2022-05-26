import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
// import Blogs from './components/Blogs/Blogs';
// import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Register from './components/Register/Register';
// import Manage from './components/Manage/Manage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile';
import MyReviews from './components/Dashboard/MyReviews';
import MyOrders from './components/Dashboard/MyOrders';
import MakeAdmin from './components/Dashboard/MakeAdmin';
// import AddItems from './components/AddItems/AddItems';
// import MyItems from './components/MyItems/MyItems';

function App() {
  // bg-[#20242c]
  return (
    <div className="App bg-white">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/Blogs' element={<Blogs></Blogs>}></Route> */}
        <Route path='/Inventory/:productId' element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
        <Route path='/Dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='/Dashboard/Reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='/Dashboard/Orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/Dashboard/MakeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        {/* <Route path='/Manage' element={<RequireAuth><Manage></Manage></RequireAuth>}></Route>
        <Route path='/Add' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/MyItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/About' element={<About></About>}></Route> */}
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer> 
      <ToastContainer />
    </div>
  );
}

export default App;
