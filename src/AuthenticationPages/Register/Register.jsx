import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Register = () => {
    const {register, updatePro} = useContext(AuthenticationContext);
    const [error, setError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
        .then(res => {
            const user = res.user;
            updatePro(name, photo)
            user.displayName = name;
            user.photoURL = photo;
            form.reset();
            setError('')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User has been created successfully',
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
            <div className="hero min-h-screen bg-base-200 lg:p-20">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-primary my-5">Register now!</h1>
                        <p className='my-5 text-red-500'>{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Link</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Link" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <p className='my-5 text-center'><small className=''>already have an account? <Link className='text-primary' to='/login'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;