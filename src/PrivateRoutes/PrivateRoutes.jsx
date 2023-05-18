import React, { useContext } from 'react';
import { AuthenticationContext } from '../AuthenticationProvider/AuthenticationProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthenticationContext);
    const location = useLocation();
    if (loading) {
        return <button className="btn loading btn-block my-60">loading</button>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{from: location}} to='/login'></Navigate>
    );
};

export default PrivateRoutes;