import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Breadcrumbs from '../components/Breadcrumbs';
import './RootLayout.css';



const RootLayout = () => {
  return (
    <div className='app__root-layout'>
        <header>
            <nav>
                <h1>React-RD</h1>
                <NavLink to='/'       className='nav-link'>Home</NavLink>
                <NavLink to='about'   className='nav-link'>About</NavLink>
                <NavLink to='careers' className='nav-link'>Careers</NavLink>
                <NavLink to='help'    className='nav-link'>Help</NavLink>
            </nav>
            <Breadcrumbs />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default RootLayout;