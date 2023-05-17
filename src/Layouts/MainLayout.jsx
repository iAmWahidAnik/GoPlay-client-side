import React from 'react';
import Header from '../Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;