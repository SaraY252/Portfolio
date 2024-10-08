import React from 'react';
import Logo from '../../assests/logo.png'; 
import './NavBar.css';

const Navbar = () => {
    return (
        <div className='main-navbar-container' id='navbar'>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className='navbar'>
                    <a href='/' className='navbar-links'>Home</a>
                    <div className="dropdown-container"> 
                        <button className="navbar-links">
                            Blog ▼
                        </button>
                        <div className='dropdown-blog-menu'>
                            <a className='menu-links' href='/blog'>Blog</a>
                            <a className='menu-links' href='/blogsingle'>Blog Single</a>
                        </div>
                    </div>
                    <a href='/award' className='navbar-links'>Awards</a>
                    <a href='/contact' className='navbar-links'>Contact</a>
                    <button className='navbar-links' id='follow-btn'>Follow Me</button>
                </div>
                </div>
                <div className='responsive-navbar-container'>
                <div className='responsive-logo-container'>
                    <img src={Logo} alt="Logo" className='responsive-logo' />
                </div>
                
                <div className='responsive-navbar'>
                    <a href='/' className='responsive-navbar-links'>Home</a>
                    <div className="responsive-dropdown-container"> 
                        <button className="responsive-navbar-links">
                            Blog ▼
                        </button>
                        <div className='responsive-dropdown-blog-menu'>
                            <a className='responsive-menu-links' href='/blog'>Blog</a>
                            <a className='responsive-menu-links' href='/blogsingle'>Blog Single</a>
                        </div>
                    </div>
                    <a href='/award' className='responsive-navbar-links'>Awards</a>
                    <a href='/contact' className='responsive-navbar-links'>Contact</a>
                    <button className='responsive-navbar-links' id='responsive-follow-btn'>Follow Me</button>
                </div>
            </div>
      </div>
    );
};

export default Navbar;
