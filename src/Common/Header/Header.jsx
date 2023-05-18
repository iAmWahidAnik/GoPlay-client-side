import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logout } = useContext(AuthenticationContext);
    console.log(user);

    const handleLogout = () => {
        logout()
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You have been successfully logged out',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>

                        {user && <>
                            <li><Link to='/mytoys'>My Toys</Link></li>
                            <li><Link to='/addtoy'>Add A Toy</Link></li>
                            <button onClick={handleLogout} className='btn btn-primary'>Logout</button></>}

                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/1083/1083808.png" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">GoPlay</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    <li><Link to='blogs'>Blogs</Link></li>

                    {user && <>
                        <li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                        <button onClick={handleLogout} className='btn btn-primary'>Logout</button></>}

                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="avatar tooltip tooltip-left" data-tip={user?.displayName}>
                        <div className="w-24 rounded-xl">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
            </div>
        </div>
    );
};

export default Header;