import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';
const AddReview = () => {
    const [user] = useAuthState(auth)
    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: user.displayName,
            rating: event.target.rating.value,
            description: event.target.description.value
        };
        console.log(data);

        const url = `https://calm-refuge-39895.herokuapp.com/testimonial/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Thanks for your valuable review.');
            });
    };
    return (
        <div>
            <PageTitle title='AddReview'></PageTitle>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center items-center mt-10">
                <div className="card-body  text-center">
                    <h2 className="card-title font-bold text-2xl">Please Give Your Review</h2>
                    <form onSubmit={onSubmit}>
                        <input name='name' type="text" placeholder="Type here Your name" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <textarea name='description' className="my-2 textarea textarea-warning w-full" placeholder="Description"></textarea>
                        <input name='image' type="file" placeholder="your image" className="input w-full max-w-xs my-2 " />
                        <div className='flex justify-center mb-4'>
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="card-actions justify-end">
                            <button type='submit' className="btn btn-primary my-2 w-full">REVIEW</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;