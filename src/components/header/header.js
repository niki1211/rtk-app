import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './header.scss';

const header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>
                RTK App
                </div>
            </Link>
            <div className='user-img'>
                <img src={user} alt='user' />
            </div>
        </div>
    );
};

export default header;