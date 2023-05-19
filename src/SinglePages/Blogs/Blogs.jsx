import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('GoPlay - Blogs')
    return (
        <div className='text-center my-20'>
            <p className='text-primary font-semibold'><small>click over the questions to see the answers</small></p>
            <div className="collapse my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p className='my-3'><span className='font-semibold'>what is access token :</span> A credential that can be used by an application to access an API</p>

                    <p className='my-3'><span className='font-semibold'>how access token work :</span> access tokens confirm to the JWT standard and contain information about the user.</p>

                    <p className='my-3'><span className='font-semibold'>what is refresh token :</span> Refresh token allows us you to balance our users access needs with your organization's security practices.</p>

                    <p className='my-3'><span className='font-semibold'>how refresh token work :</span> generates another new JWT access token when it expires or even before.</p>

                    <p className='my-3'><span className='font-semibold'>where should we store them on client side :</span> on client side we should store them on httpOnlyCoockies. but we can also store them on browser's local storage (but this is not the best place)</p>
                </div>
            </div>
            <div className="collapse my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <div className='flex gap-10 justify-center'>
                        <div>
                            <p className='text-left my-5 text-xl font-semibold text-primary'>SQL</p>
                            <ul className='space-y-5 list-disc text-left'>
                                <li>relational databse management system</li>
                                <li>vertically scalable</li>
                                <li>fixed or predefined</li>
                                <li>can be used for complex queries</li>
                                <li>SQL databases are table based database</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-left my-5 text-xl font-semibold text-primary'>NoSQL </p>
                            <ul className='space-y-5 list-disc text-left'>
                                <li>distributed database management system</li>
                                <li>horizontally scalable</li>
                                <li>Dynamic schema</li>
                                <li>Not good for complex queries</li>
                                <li>NoSQL databases can be document based. e.g key:value pairs</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="collapse my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p className='my-3'><span className='font-semibold'>express js :</span> Express.js is a back end web application framework for building RESTful APIs with Node.js. express js released as free and open-source software. It is designed for building web applications and APIs. It is a standard server framework for Node.js.
                    </p>

                    <p className='my-3'><span className='font-semibold'>nest js :</span> NestJs is one of the fastest-growing NodeJs framework for building efficient, scalable, and enterprise-grade backend applications using NodeJs.
                        It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript.</p>
                </div>
            </div>
            <div className="collapse my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p className='my-3'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;