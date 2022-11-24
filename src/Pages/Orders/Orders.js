import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const {user}  =useContext(AuthContext);
  const [orders,setOrders]=useState([]);

   useEffect(()=>{
     fetch(`https://genius-car-server-nine-smoky.vercel.app/orders?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
   },[user?.email])

   //ekhane product delete krar jnno backend server side eo ekta delete operation krte hbe.  
  const handleDelete=id=>{
    const proceed=window.confirm('Are You sure to delete this Item');
   if(proceed){
     fetch(`https://genius-car-server-nine-smoky.vercel.app/orders/${id}`, {
       method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
            alert('Deleted Successfully');
            const remaining=orders.filter(odr=>odr._id!==id);
            setOrders(remaining);
         }
     })
   }
}

const handleStatusUpdate=id=>{
    fetch(`https://genius-car-server-nine-smoky.vercel.app/orders/${id}`,{
         method:'PATCH',
         headers: {
            'content-type':'application/json'
         },
         body:JSON.stringify({status:'Approved'})
    }) 
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            const remaining=orders.filter(ord=>ord._id!==id);
            const approving=orders.find(odr=>odr._id===id);
            approving.status='Approved';

           const newOrders=[approving,...remaining];
           setOrders(newOrders);
        } 
    })
}


    return (
        <div>
           
           
            
                {orders?.length ?//orders er moddhe jodi length  thake thle eita dekhabo ar na hle 
                    <>
                       <h2 className="text-4xl mb-3">You have {orders.length} Orders.</h2>
                    </>
                    :
                    <h3 className='text-3xl mb-4'>Oopps! You have No Orders Yet.Please Order from Home Page's <Link to='/'><u className='font-bold text-pink-500'>Services</u></Link> Area. </h3>
                }
           
            <div className="overflow-x-auto w-full"> 
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Service Charge</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        orders.map(order=><OrderRow
                         key={order._id}
                         order={order}
                         handleDelete={handleDelete}
                         handleStatusUpdate={handleStatusUpdate}
                        ></OrderRow>)
                       } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;