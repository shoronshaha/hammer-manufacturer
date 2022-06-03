import React, { useEffect, useState } from 'react';

import icon from '../../Images/icons/delete.png';
import PageTitle from '../Shared/PageTitle';
const ManageProduct = () => {
    const [allTools, setAllTools] = useState([]);

    useEffect(() => {
        fetch(`https://calm-refuge-39895.herokuapp.com/allTool`)
            .then(res => res.json())
            .then(data => setAllTools(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-refuge-39895.herokuapp.com/allTool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allTools.filter(allTool => allTool._id !== id);
                    setAllTools(remaining);
                })

        }
    }


    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <PageTitle title='ManageProducts'></PageTitle>
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
                            Description
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
                    </tr>
                </thead>
                <tbody>
                    {
                        allTools.map(allTool => {
                            return (
                                <tr key={allTool._id} className="bg-white border-b dark:bg-orange-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-black-900 dark:text-black whitespace-nowrap">
                                        {allTool.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='w-20' src={allTool.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {allTool.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {allTool.ava_quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {allTool.price}
                                    </td>

                                    <td className="px-2 py-2">
                                        <button onClick={() => handleDelete(allTool._id)}> <img src={icon} alt="Delete the Item" /></button>
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

export default ManageProduct;