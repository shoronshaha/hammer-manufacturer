import React from 'react';

const SummaryCard = ({ summary }) => {
    return (
        <div className="card w-[180px]  bg-base-100 ">
            <figure className="px-10 pt-10">
                <img style={{ width: "60px", height: "60px" }} src={summary.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{summary.number}</h2>
                <h2 className="card-title">{summary.name}</h2>
            </div>
        </div>
    );
};

export default SummaryCard;