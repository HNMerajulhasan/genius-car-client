import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

const {createUser}=useContext(AuthContext);
const navigate = useNavigate()
const location = useLocation();
const from = location.state?.from?.pathname || '/'

    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
       // const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        form.reset('');
        createUser(email,password)
         .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true })
         })
        
         .catch(err=>console.error(err));
   }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                   <img className='w-3/4' src={loginImg} alt=" "/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">SignUp!</h1> 
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name.." className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an Account? Please<Link to='/login' className='text-orange-600 font-bold ml-2'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;