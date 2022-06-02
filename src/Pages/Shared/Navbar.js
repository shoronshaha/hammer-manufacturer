import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../Images/icons/logo 2.png'
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li className='items-center'><img style={{ width: '130px' }} src={logo} alt="" /></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myPortfolio">Portfolio</Link></li>


        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-active btn-ghost  font-bold">SignOut</button> : <Link to="/Login">Login</Link>}</li>

    </>
    return (

        <div className="navbar bg-[#001219] text-white justify-around ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#001219] rounded-box w-52 uppercase font-bold text-white">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 bg-[#001219] text-white uppercase font-bold">
                    <img style={{ width: '50px' }} src={logo} alt="" />
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end text-white">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>

    );
};

export default Navbar;