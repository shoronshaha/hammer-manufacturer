import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';



const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-2xl">All Users: {users.length}</h2>

            <table className="w-full text-sm text-left text-gray-500 dark:text-black ">
                <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-black dark:text-white px-6 py-4">
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Users;