import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div><Link to='/' />Filmer</div>
            {/*<div><Link to='/delete'>Delete</Link></div>*/}
        </div>
    )
}

export default Navbar;