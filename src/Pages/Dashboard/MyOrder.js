import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import icon from '../../Images/icons/delete.png'

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://calm-refuge-39895.herokuapp.com/userOrder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-refuge-39895.herokuapp.com/allOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })

        }
    }
    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className='text-center text-2xl font-bold'>My Orders: {orders.length}</h2>
            <table className="w-full text-sm text-left text-gray-500 dark:text-black ">
                <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-black dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span >Delete</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span >Payment</span>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {
                            return (
                                <tr key={order._id} className="bg-white border-b dark:bg-orange-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-black-900 dark:text-black whitespace-nowrap">
                                        {order.productName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {order.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.price}
                                    </td>
                                    <td className="px-2 py-2">
                                        <button onClick={() => handleDelete(order._id)}> <img src={icon} alt="Delete the Item" /></button>
                                    </td>

                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.orderId}</span></p>
                                        </div>}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;