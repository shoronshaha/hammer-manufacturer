import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
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
          {/* <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route> */}
        </Route>
        <Route path='/tool/:toolId' element={
          <RequireAuth>
            <ToolsDetails></ToolsDetails>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={< SignUp />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
