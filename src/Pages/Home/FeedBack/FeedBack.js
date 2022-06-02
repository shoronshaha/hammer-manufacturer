import React from 'react';
const FeedBack = () => {
    return (

        <div>
            <h1 className='text-[4vw] text-center font-bold'>REQUEST A QUICK QUOTE</h1>
            <p className='text-center'>We love to listen and we are eagerly waiting to talk to you regarding your project.<br /> Get in touch with us if you have any queries and we will get back to you as soon as possible</p>
            <form className=" md:mx-24 mt-10 bg-white py-5 ">
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Subject
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />

                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                    </div>
                </div>

                <div className="text-center ">
                    <button className="  shadow bg-orange-600 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold ml-3 py-2 px-4 rounded" type="button">
                        SEND MESSAGE
                    </button>
                </div>


            </form>

        </div>
    );
};

export default FeedBack;