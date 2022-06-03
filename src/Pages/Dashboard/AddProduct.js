import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';



const AddProduct = () => {
    const [user] = useAuthState(auth);

    if (user) {
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addProduct = {
            userName: event.target.userName.value,
            email: event.target.email.value,
            name: event.target.name.value,
            price: event.target.price.value,
            ava_quantity: event.target.ava_quantity.value,
            min_quantity: event.target.min_quantity.value,
            description: event.target.description.value,
            image: event.target.image.value,
        };
        await axios.post('https://calm-refuge-39895.herokuapp.com/addProduct', addProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your item is added !!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className="mt-10 w-full">

            <PageTitle title='AddProducts'></PageTitle>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center items-center">
                <div className="card-body  text-center">
                    <h2 className="card-title font-bold text-2xl text-center">Add Your Best Tools</h2>
                    <form onSubmit={handleSubmit}>
                        <input name='userName' value={user?.displayName} type="text" placeholder="Your userName" disabled className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='email' value={user?.email} disabled type="email" placeholder="Your email" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='name' type="text" placeholder="Your Product Name" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='price' type="number" placeholder="Your Product Price" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='ava_quantity' type="number" placeholder="Available_quantity " className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='min_quantity' type="text" placeholder="Minimum_quantity" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <textarea name='description' className="my-2 textarea textarea-warning w-full" placeholder="Description"></textarea>
                        <input name='image' type="text" placeholder="Give Image URL" className="my-2 input input-bordered input-warning w-full max-w-xs" />

                        <div className="card-actions justify-end">
                            <button type='submit' className="btn btn-primary my-2 w-full">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};





export default AddProduct;