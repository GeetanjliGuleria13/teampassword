import React from 'react'
import Common, { Commontwosection } from '../Components/Common';
import Commonlogodata, { Carddata } from '../Components/Commondata';
import Commonlogo from '../Components/Commonlogo';
import { NavLink } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import Card from '../Components/Card';
import easeimg from '../assets/images/g2badges.webp' ;
import ditchimg from '../assets/images/teampassword-dashboard.webp';
import teampasswordimg from '../assets/images/teampassword-screenshot.webp';
import homebannerimgleft from '../assets/images/homepage-hero1.webp';
import homebannerimgright from '../assets/images/homepage-hero2.webp';

export default function Home() {
  return (
    <>
        <div className='home-banner darkblue-backround'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-white'>
                        <Common 
                            title="The Password Manager for Teams"
                            desc="TeamPassword is the fastest, easiest and most secure way to store and share team logins and passwords"
                            visit="/signup"
                            btnName="Get Started!"
                        />
                    </div>
                    <div className='col-md-6'>
                        <div className='home-banner-img home-banner-imgleft'>
                            <img src={homebannerimgleft} alt="banner" />
                        </div>
                        <div className='home-banner-img home-banner-imgright'>
                            <img src={homebannerimgright} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='ease-sec'>
            <div className='container'>
                <Commontwosection 
                imgsrc={easeimg}
                title="Easy to Use, Easy to Love"
                desc="In the office or on the go, TeamPassword makes storing and sharing passwords safely a synch."
                />
            </div>
        </div>
        <div className='ease-sec blue-background'>
            <div className='container'>
                <Commontwosection 
                imgsrc={ditchimg}
                title="Ditch the spreadsheet"
                desc="TeamPassword keeps all your logins safe and in-sync, so your team can get the access they need when they need it."
                />
            </div>
        </div>
        <div className='blue-background'>
            <div className='container'>    
                <div className='logo-sec d-flex justify-content-around align-items-center'>
                    {
                        Commonlogodata.map((val, index)=>{
                            return <Commonlogo 
                            key={index}
                            imgsrc={val.imgsrc}
                            />
                        })
                    }
                </div>
            </div>
        </div>
        <div className='home-card-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Your Team, Secure and In Sync</h2>
                    </div>
                    {
                        Carddata.map((val, index)=>{
                            return <Card 
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                desc={val.desc}
                            />
                        })
                    }
                    <div className='col-md-12'>
                        <div className='common-green-btn'>
                            <NavLink to="" >Take a Product Tour <EastIcon/> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='blue-background ease-sec pwd-mgmt'>
            <div className='container'>
                <Commontwosection 
                imgsrc={teampasswordimg}
                title="Password Management for Teams of All Sizes"
                desc="From digital nomads to startups to growing agencies, TeamPassword works for teams of any size. Our customers include:"
                />
            </div>
        </div>
        <div className='home-logo-botm'>
            <div className='container'>
                <div className='logo-sec d-flex justify-content-around align-items-center'>
                    {
                        Commonlogodata.map((val, index)=>{
                            return <Commonlogo 
                            key={index}
                            imgsrc={val.imgsrc}
                            />
                        })
                    }
                </div>
            </div>
        </div>
        <div className='home-get-started  text-center'>
            <Common 
            title="The Password Manager for Teams"
            desc="TeamPassword is the fastest, easiest and most secure way to store and share team logins and passwords"
            visit="/signup"
            btnName="Get Started!"
            />
        </div>
      
    </>
  )
}
