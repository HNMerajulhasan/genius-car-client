import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=" m-5">
                <h1 className='text-2xl fond-bold text-fuchsia-600 m-5'>Below The Differences Between SQL and NoSQL.</h1>
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-2xl'>SQL</th>
                            <th className='text-2xl'>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th className='font-bold'>1</th>
                            <td className='font-bold'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td className='font-bold'>Non-relational or distributed database system.</td>
                        </tr>

                        <tr>
                            <th className='font-bold'>2</th>
                            <td className='font-bold'>These databases have fixed or static or predefined schema</td>
                            <td className='font-bold'>They have dynamic schema</td>
                        </tr>

                        <tr>
                            <th className='font-bold'>3</th>
                            <td className='font-bold'>These databases are best suited for complex queries</td>
                            <td className='font-bold'>These databases are not so good for complex queries</td>
                        </tr>
                        <tr>
                            <th className='font-bold'>4</th>
                            <td className='font-bold'>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                            <td className='font-bold'>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="card m-10 bg-green-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> What is JWT, and how does it work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p><br/>
                    <h2 className="card-title">And How does it work?</h2>
                    <p>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                       A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
            </div>
  
            <div className=" m-5">
                <h1 className='text-2xl fond-bold text-fuchsia-600 m-5'>Below The Differences Between JavaScript and NodeJs.</h1>
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-2xl'>Javascript</th>
                            <th className='text-2xl'>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th className='font-bold'>1</th>
                            <td className='font-bold'>Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td className='font-bold'>NodeJS is a Javascript runtime environment.</td>
                        </tr>

                        <tr>
                            <th className='font-bold'>2</th>
                            <td className='font-bold'>Javascript can only be run in the browsers.</td>
                            <td className='font-bold'>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>

                        <tr>
                            <th className='font-bold'>3</th>
                            <td className='font-bold'>It is basically used on the client-side.</td>
                            <td className='font-bold'>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <th className='font-bold'>4</th>
                            <td className='font-bold'>Javascript is used in frontend development.</td>
                            <td className='font-bold'>Nodejs is used in server-side development.</td>
                        </tr>
                        <tr>
                            <th className='font-bold'>5</th>
                            <td className='font-bold'>Some of the javascript frameworks are RamdaJS, TypedJS,ReactJs etc. </td>
                            <td className='font-bold'>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card m-10 bg-green-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                     If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.<br/>
                     A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                     The cluster module allows easy creation of child processes that all share the same server ports.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;