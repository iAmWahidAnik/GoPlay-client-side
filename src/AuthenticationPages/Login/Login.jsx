import React, { useContext, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthenticationContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log('email : ',email, 'password : ',password);
        setError('')
        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate(from)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You have been successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                const message = error.message;
                setError(message)
            })
    }
    return (
        <div className='my-20'>
            <div className="hero min-h-screen bg-base-200 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full shadow-2xl bg-base-100 p-10">
                    <div className='lg:w-1/2'>
                        <Player
                            src='https://assets2.lottiefiles.com/packages/lf20_XpVCMJTSQt.json'
                            className="player"
                            loop autoplay
                        />
                    </div>
                    <form onSubmit={handleLogin} className="p-10 shadow-lg rounded-lg bg-base-200 lg:w-1/2">
                        <h1 className="text-5xl font-bold my-5 text-error">Login now!</h1>
                        <p className='my-5 text-red-500'>{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>
                        <p className='my-5 text-center text-error'><small className=''>new to GoPlay? <Link className='text-primary' to='/register'>Register</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;