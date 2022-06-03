import React from 'react';
import PageTitle from '../Shared/PageTitle';



const Blogs = () => {
    return (

        <div>
            <PageTitle title='Blogs'></PageTitle>
            <h1 className='text-5xl text-center mt-3 text-orange-500 font-bold'>BLOGS</h1>
            <div className='justify-items-center mt-10 grid sm:grid-cols-1 md:grid-cols-3'>

                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>How will you improve the performance of a React Application?</h1>
                    <p>
                        # Using Immutable Data Structures.</p>
                    <p>
                        # Function/Stateless Components and React.PureComponent.</p>
                    <p>
                        # Multiple Chunk Files.</p>
                    <p>
                        # Using Production Mode Flag in Webpack.</p>
                    <p>
                        # Dependency optimization.</p>
                    <p>
                        # Use React.Fragments to Avoid Additional HTML Element Wrappers.</p>
                    <p>
                        # Avoid Inline Function Definition in the Render Function.</p>
                    <p>
                        # Throttling and Debouncing Event Action in JavaScript.</p>
                    <p>
                        # Avoid using Index as Key for map.</p>
                    <p>
                        # Avoiding Props in Initial States.</p>
                    <p>
                        # Spreading props on DOM elements.</p>


                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-center text-[16px]' >Communication State: Communication state plays a crucial role in storing information in different states. </p>
                    <p className='text-center text-[16px] py-2' >Data State: Data state covers information that our React application stores temporarily for various business functions.</p>
                    <p className='text-center text-[16px] py-2' >Control State: Control state refers to the state which the user has input into the app.</p>
                    <p className='text-center text-[16px] py-2' >Session State: Session state contains information about the user of the application such as user id, permissions, passwords, etc.

                    </p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>How does prototypical inheritance work?</h1>
                    <p className='text-center text-[16px]' >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.

                    </p>
                    <p className='text-center text-[16px] py-2' >Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object. </p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                    <p className='text-center text-[16px]s'>
                        With useState we can directly tell to react that our view needs to be updated to reflect the changes that we did with our value. Using let, even changing it for some reason it can not update.

                    </p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='text-center text-[16px]s'>
                        const searchResult = array.find( product.name = product.name === 'wrench' )
                    </p>


                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What is a unit test? Why should write unit tests?</h1>
                    <p className='text-center text-[16px]s'>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                    </p>
                    <p className='text-center text-[16px]s'>
                        Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code.This can help them to stay focused and can also help them to create much better designs.
                    </p>


                </div>
            </div>

        </div>
    );
};

export default Blogs;