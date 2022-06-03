import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import EditProfile from './Pages/Dashboard/EditProfile';
import ManageAllOrders from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageParoduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/User';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import ToolsDetails from './Pages/ToolDetails/ToolDetails';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path="dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        } >
          <Route index element={<MyProfile></MyProfile>}></Route>


          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path='editProfile' element={<EditProfile></EditProfile>}></Route>
        <Route path='/tool/:toolId' element={
          <RequireAuth>
            <ToolsDetails></ToolsDetails>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={< SignUp />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
