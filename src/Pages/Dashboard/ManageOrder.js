import React, { useEffect, useState } from 'react';

import icon from '../../Images/icons/delete.png'
import PageTitle from '../Shared/PageTitle';
const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/Orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/allOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allOrders.filter(allOrder => allOrder._id !== id);
                    setAllOrders(remaining);
                })

        }
    }

    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <PageTitle title='Manage Orders'></PageTitle>
            <table className="w-full text-sm text-left text-gray-500 dark:text-black">
                <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-black dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Picture
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>

                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(allOrder => {
                            return (
                                <tr key={allOrder._id} className="bg-white border-b dark:bg-orange-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-black-900 dark:text-black whitespace-nowrap">
                                        {allOrder.productName
                                        }
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='w-20' src={allOrder.productImage} alt="" />
                                    </td>

                                    <td className="px-6 py-4">
                                        {allOrder.quantity}
                                    </td>


                                    <td className="px-2 py-2">
                                        <button onClick={() => handleDelete(allOrder._id)}> <img src={icon} alt="Delete the Item" /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div >
    );
};

export default ManageAllOrders;