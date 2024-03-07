import React from 'react';
import './header.css';
import logourl from "../../assets/images/teampassword-logo.svg";
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const MenuData = [
  {
      title: 'Plans & Pricing',
      link: '/planspricing',
  },
  {
      title: 'Product Tour',
      link: '/producttour',
  },
  {
      title: 'Blog',
      link: '/blog',
  },
  {
      title: 'Security',
      link: '/security',
  },
  {
      title: 'Password Generator',
      link: '/passwordgenerator',
  },
  {
    title: 'Customers',
    link: '/customers',
  },
  {
    title: 'Help',
    link: '/help',
  },
  {
    title: 'Sign In',
    link: '/login',
  },
  {
    title: 'Get Started',
    link: '/signup',
  },
];


const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-main row">
            <nav className="navbar navbar-expand-lg ">
              <NavLink to="/" className="header-logo col-md-2"> <img src={logourl} alt="header-logo" /> </NavLink>
              <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="header-navbar col-md-10 collapse navbar-collapse" id="navbarSupportedContent">
                <ul>
                    {
                    MenuData.map((val, index) => {
                      return <Menu 
                      key={index}
                      title={val.title}
                      link={val.link}  
                      />
                    })
                    }
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
    )
  }

  export default Navbar;