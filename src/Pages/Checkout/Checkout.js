import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
  const {_id,title,price}  = useLoaderData();
  const {user}=useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/orders'

  const handlePlaceOrder=event=>{
    event.preventDefault();
    const form=event.target;
    const name=`${form.firstName.value} ${form.lastName.value}`;
    const email=user?.email || 'unregistered';
    const phone =form.phone.value;
    const message=form.message.value;

    //nicher ei order er ei information gulo ke amader backend a(Mongodb) save krte hbe.
    const order={
        service:_id,
        serviceName:title,
        price,
        customer:name,
        email,
        phone,
        message
    }

   //server side a create kra order API ta ke amra ekhane akhn fetch kre anbo.Ar jehetu eita ekta create operation tai ekhane method hbe POST.It means user er order kra data ke amra backend a send kre dibo.
   fetch('https://genius-car-server-nine-smoky.vercel.app/orders', {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(order)
   }) 
    .then(res=>res.json())
    .then(data=>{console.log(data)
       console.log(data) 
       if(data.acknowledged){
         alert('Order Placed Successfully')
         form.reset();
         navigate(from, { replace: true })
       }
    })
    .catch(err=>console.error(err));
  }


    return (
        <div>
           <form onSubmit={handlePlaceOrder}>
            <h2 className='text-4xl'>You are about to Order: {title}</h2>
            <h4 className="text-3xl text-cyan-500 mt-4">Service Charge: $ {price}</h4>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" required/>
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
             </div> 
             <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your message for this Service" required></textarea>

             <input className='btn mb-3 mt-3' type="submit" value="Place Your Order."></input>
           </form>
        </div>
    );
};

export default Checkout;