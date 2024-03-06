import React from 'react';
import producttourlogo from '../assets/images/settings-icon.2cf24217.svg';
import { Browsericon, Commontourlogodata, Encryptlogo } from '../Components/Commondata';
import Commonlogo from '../Components/Commonlogo';
import Common, { Commontwosection } from '../Components/Common';
import passwordscreenshot from '../assets/images/teampassword-save-login.webp';
import groupimg from '../assets/images/teampassword-org-members.webp';
import teampasswordchart from '../assets/images/teampassword-chart.webp';
import Generatepassword from '../assets/images/teampassword-generate-password.webp';
import Stepverification from '../assets/images/teampassword-2fa.webp';
import Admincontrols from '../assets/images/admin-controls.webp';
import Emailnotification from '../assets/images/teampassword-notifications.webp';
import { NavLink } from 'react-router-dom';

export default function Producttour() {
  return (
    <>
      <div className='tour-banner darkblue-backround text-center'>
        <div className='container'>
          <figure>
            <img src={producttourlogo} alt="logo" />
          </figure>
          <h1 className='text-white h2'>Team Password <br/>Product Tour</h1>
          <p className='h6 text-lightblue mx-5 px-5 pt-3 pb-5 mb-4'>TeamPassword is the simple, secure team password manager designed from the ground up with ease-of-use and collaboration in mind.</p>
          <div className='tour-banner-logo-sec'>
            <h6 className='text-lightblue pb-3 pt-4'>TRUSTED BY</h6>
            <div className='tour-banner-logo-sec-inner d-flex justify-content-around align-items-center'>
              {
                Commontourlogodata.map((val, index)=>{
                  return <Commonlogo
                  key={index}
                  imgsrc={val.imgsrc}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection
           title="Accessible Everywhere"
           desc="Access and manage passwords from the web, on your desktop, laptop, and on mobile devices. " 
           desc2="Need more speed? Click and Go with our Chrome, Firefox, and Safari extensions to easily pick the correct account, log in on the fly and keep projects moving."
           imgsrc={passwordscreenshot}
          />
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex align-items-center brower-icon'>
                {
                  Browsericon.map((val, index)=>{
                    return (
                      <Commonlogo 
                       key={index}
                       imgsrc={val.imgsrc}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ease-sec margin-bottom'>
        <div className='container'>
          <Commontwosection 
          title="Groups and Sharing"
          desc="Groups allow you to quickly share logins and passwords with a subset of team members, a group of external collaborators, or even the entire team. If a team member no longer needs access, they can be removed from the group with a single click."
          imgsrc={groupimg}
          />
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection 
          title="Many Teams, One TeamPassword"
          desc="Belong to multiple teams? Tons of Clients? No problem! Use your one TeamPassword account to access all of the passwords you need in one place."
          imgsrc={teampasswordchart}
          />
        </div>
      </div>
      <div className='ease-sec margin-bottom'>
        <div className='container'>
          <Commontwosection
            title="Secure Unique Password Generator"
            desc="Need to create a new password when setting up a private or shared login? No sweat: use the built-in strong password generator to generate secure, randomized passwords on the fly."
            imgsrc={Generatepassword}
          />
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection 
            title="2-Step Verification"
            desc="Add an extra layer of log in security to your TeamPassword account by requiring a temporary Google Authenticator code in addition to your master password. You can also generate backup codes to ensure you'll never get locked out."
            imgsrc={Stepverification}
          />
        </div>
      </div>
      <div className='ease-sec margin-bottom'>
        <div className='container'>
          <Commontwosection 
            title="Activity and Logging"
            desc="Need to know who added that Login? See what your team is up to without needing to send an email or chat. TeamPassword's activity allows you to see which Logins are being used, which ones aren't, and when your shared Logins are being updated."
            imgsrc={Admincontrols}
          />
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection 
            title="Email Notifications"
            desc="Get notified when important things happen on your team, such as adding or removing people or passwords. You can receive email notifications for just about any important action on TeamPassword."
            imgsrc={Emailnotification}
          />
        </div>
      </div>
      <div className='encrypt-sec text-center'>
        <div className='container'>
          <Common 
            title="Secure Encryption Technology"
            desc="When you use TeamPassword to share a login, your sensitive information is hashed, salted, and encrypted locally on your computer, and then transmitted to the server via an encrypted connection."
          />
          <NavLink to='/security'>More about TeamPassword security</NavLink>
          <div className='d-flex align-items-center justify-content-around encrypt-logo-sec'>
            {
              Encryptlogo.map((val, index)=>{
                return (
                  <Commonlogo
                  key={index}
                  imgsrc={val.imgsrc}
                  />
                )
              })
            }
          </div>

        </div>
      </div>
      <div className='home-get-started  text-center'>
        <div className='container'>
          <Common 
          title="Try TeamPassword for Free Today!"
          desc="Not sure if TeamPassword is right for you? Try it FREE for 14-days. Invite your team, input your logins, and discover for yourself just how easy password security can be."
          visit="/signup"
          btnName="Get Started!"
          />
        </div>
      </div>
    </>
  )
}
