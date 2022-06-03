import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTool from '../../../Hooks/useTool';

const ToolProduct = () => {
    const [tools, setTools] = useTool();
    const navigate = useNavigate();
    const navigateToToolsDetail = _id => {
        navigate(`/tool/${_id}`);
    }
    return (
        <div>
            <h1 className='sm:text-[4vw] md:text-3xl text-center font-bold my-5 text-blue-500'>HAMMER COLLECTION</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:gird-cols-2 justify-items-center gap-8'>

                {
                    tools.map(tool => {
                        return (

                            <div key={tool._id} className="card w-96 bg-base-100 shadow-xl my-3">
                                <h2 className="card-title justify-center">{tool.name}</h2>
                                <figure className="px-10 pt-10">
                                    <img src={tool.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body">

                                    <p> <span className='font-bold'>Description: </span> {tool.description}</p>
                                    <p> <span className='font-bold'>Available: </span>{tool.ava_quantity}</p>
                                    <p> <span className='font-bold'>Minimum: </span>{tool.min_quantity}</p>
                                    <p> <span className='font-bold'>Price: </span>{tool.price}</p>
                                    <div className="card-actions">
                                        <button onClick={() => navigateToToolsDetail(tool._id)} className="btn btn-primary w-full">Purchase</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ToolProduct;