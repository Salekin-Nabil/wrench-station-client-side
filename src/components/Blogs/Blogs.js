import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='my-[5vw]'>
        <Helmet>
            <title>Wrench Station-Blogs</title>
        </Helmet>
        <h1 className='text-[goldenrod] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Blog <span className='text-[#20242c]'>Articles</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                <div className="flex justify-center my-[5vw]">
                    <div className="bg-[#20242c] max-w-sm p-5 cursor-pointer text-white hover:text-[#20242c] rounded-3xl shadow-2xl shadow-[gray] h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>How will you improve the performance of a React Application?</h6>
                        <div className='text-[14px] mt-[40px] font-medium'>
                            <ul className='text-left'>
                                <li># Using Immutable Data Structures.</li>
                                <li>#Function/Stateless Components and React.PureComponent.</li>
                                <li># Multiple Chunk Files.</li>
                                <li># Using Production Mode Flag in Webpack.</li>
                                <li># Dependency optimization.</li>
                                <li># Use React.Fragments to Avoid Additional HTML Element Wrappers.</li>
                                <li># Avoid Inline Function Definition in the Render Function.</li>
                                <li># Throttling and Debouncing Event Action in JavaScript.</li>
                                <li># Avoid using Index as Key for map.</li>
                                <li># Avoiding Props in Initial States.</li>
                                <li># Spreading props on DOM elements.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-[gray] cursor-pointer text-white hover:text-[#20242c] bg-[#20242c] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What are the different ways to manage a state in a React application?</h6>
                        <p className='text-[12px] mt-[40px] font-medium'><span className='font-bold'>Communication State:</span> Communication state plays a crucial role in storing information in different states.</p>
                        <br/>
                        <p className='text-[12px] font-medium'><span className='font-bold'>Data State:</span> Data state covers information that our React application stores temporarily for various business functions.</p>
                        <br/>
                        <p className='text-[12px] font-medium'><span className='font-bold'>Control State:</span> Control state refers to the state which the user has input into the app.</p>
                        <br/>
                        <p className='text-[12px] font-medium'><span className='font-bold'>Session State:</span> Session state contains information about the user of the application such as user id, permissions, passwords, etc.</p>
                        <br/>
                        <p className='text-[12px] font-medium'><span className='font-bold'>Location State:</span> Location state is the UTF-8 display that appears in our URL bar.</p>
                        <br/>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl cursor-pointer text-white hover:text-[#20242c] shadow-[gray] bg-[#20242c] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>How does prototypical inheritance work?</h6>
                        <p className='text-[14px] mt-[70px] font-medium'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-[gray] cursor-pointer text-white hover:text-[#20242c] bg-[#20242c] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h6>
                        <p className='text-[14px] mt-[80px] font-medium'>With useState we can directly tell to react that our view needs to be updated to reflect the changes that we did with our value. Using let, even changing it for some reason it can not update.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-[gray] cursor-pointer text-white hover:text-[#20242c] bg-[#20242c] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h6>
                        
                        <p className='text-[14px] mt-[180px] font-medium'>const searchResult = array.find( product.name =&gt; product.name === 'wrench' );</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-[gray] cursor-pointer text-white hover:text-[#20242c] bg-[#20242c] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What is a unit test? Why should write unit tests?</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code.This can help them to stay focused and can also help them to create much better designs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;