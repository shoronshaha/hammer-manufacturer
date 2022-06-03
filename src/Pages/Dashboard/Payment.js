import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51L1oZrGxEy7U4yHinmJxGs2vkFA5gWemCmQ4FbbKdNTi7czIxSUXlJ7Pn4fzh1OGeilq8aUMGYjd4oMvDcWBVD8s00RYXcqaAj');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.displayName}</p>
                    <h2 className="card-title">Please Pay for {order.productName}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;