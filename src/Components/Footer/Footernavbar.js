import React from 'react';
import footerlogo from "../../assets/images/teampassword-logo-bg-white.webp" ;
import { NavLink } from 'react-router-dom';
import Footermenu from './Footermenu';
import './footer.css';

const currentyear = new Date().getFullYear();
const FooterMenuData1 = [
    {
        title: 'Product Tour',
        link: '/producttour',
    },
    {
       title: 'Plans & Pricing',
       link: '/planspricing',
    },
    {
        title: 'Password Generator',
        link: '/passwordgenerator',
    },
    {
      title: 'Customers',
      link: '/customers',
    },
];

const FooterMenuData2 = [
    {
        title: 'Blog',
        link: '/blog',
    },
    {
       title: 'Status',
       link: '/status',
    },
    {
        title: 'Support',
        link: '/support',
    },
    {
      title: 'Help',
      link: '/help',
    },
];

const FooterMenuData3 = [
    {
        title: 'LinkedIn',
        link: '/linkedin.com',
    },
    {
        title: 'Instagram',
        link: '/instagram.com',
    },
    {
        title: 'Facebook',
        link: '/facebook.com',
    },
    {
        title: 'Youtube',
        link: '/youtube.com',
    },

];

const FooterMenuData4 = [
    {
        title: 'Security',
        link: '/security',
    },
    {
        title: 'Terms of Use',
        link: '/termsofuse',
    },
    {
        title: 'Privacy Policy',
        link: '/privacypolicy',
    },

];


export default function Footernavbar() {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4 mb-md-0">
                        <NavLink to="/"><img src={ footerlogo } alt="logo" /></NavLink>
                    </div>
                    <div className="col-md-9 d-flex justify-content-around flex-column flex-sm-row px-4 px-sm-0">
                        <div className="footer-menu">
                            <h6>Product</h6>
                            <ul>
                            {
                               FooterMenuData1.map((val, index) => {
                                    return <Footermenu
                                    key={index}
                                    title={val.title}
                                    link={val.link}  
                                    />
                                })
                            }
                                
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h6>Support</h6>
                            <ul>
                                {
                                    FooterMenuData2.map((val, index) =>{
                                        return <Footermenu 
                                        key={index}
                                        title={val.title}
                                        link={val.link}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h6>Channels</h6>
                            <ul>
                            {
                                FooterMenuData3.map((val, index) =>{
                                    return <Footermenu 
                                    key={index}
                                    title={val.title}
                                    link={val.link}
                                    />
                                })
                            }
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h6>Legal</h6>
                            <ul>
                                {
                                    FooterMenuData4.map((val, index) =>{
                                        return <Footermenu 
                                        key={index}
                                        title={val.title}
                                        link={val.link}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-botm">
                    <p>© {currentyear} TeamPassword</p>
                </div>
            </div>
        </div>
      
    </>
  )
}
