import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default Main;