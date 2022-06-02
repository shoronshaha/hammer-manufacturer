import React from 'react';

const AddReview = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto justify-center items-center mt-10">
                <div class="card-body  text-center">
                    <h2 class="card-title font-bold text-2xl">Please Give Your Review</h2>
                    <form>
                        <input name='name' type="text" placeholder="Type here Your name" class="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <textarea name='description' class="my-2 textarea textarea-warning w-full" placeholder="Description"></textarea>
                        <input name='image' type="file" placeholder="your image" class="input w-full max-w-xs my-2 " />
                        <div class="rating my-2">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div class="card-actions justify-end">
                            <button type='submit' class="btn btn-primary my-2 w-full">REVIEW</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;