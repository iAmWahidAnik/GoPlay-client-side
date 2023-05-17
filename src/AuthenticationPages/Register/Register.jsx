import React from 'react';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log('handle register');
    }
    return (
        <div className='my-20'>
            <div className="hero min-h-screen bg-base-200 lg:px-20">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold my-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Link</span>
                            </label>
                            <input type="text" placeholder="Photo Link" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;