import React from 'react'
import Common, { Commontwosection } from '../Components/Common';
import { Encryptlogo } from '../Components/Commondata';
import Commonlogo from '../Components/Commonlogo';
import securtitylogo from '../assets/images/lock-icon.2196adee.svg';
import securityweb from '../assets/images/security-first.webp';
import admincontrol from '../assets/images/admin-controls.webp';
import securitydepth from '../assets/images/security-in-depth.webp';

export default function Security() {
  return (
    <>
      <div className='security-banner text-center'>
        <div className='container'>
          <figure>
            <img src={securtitylogo} alt="logo" />
          </figure>
          <Common 
            title= "Safer Collaboration for Better Teamwork"
            desc="TeamPassword exists to ensure your info stays between you and your team. TeamPassword leverages host-proof local encryption. Only you can access your data and allow de-encryption. Period."
          />
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection
          title="Security First"
          desc="We care about your security, so we’ve made Google Single Sign-on available to all users regardless of the size of your plan."
          desc2="Google Single Sign-on provides greater control over user access, making onboarding and offboarding easier and more secure."
          imgsrc={securityweb}
           />
        </div>
      </div>
      <div className='ease-sec'>
        <div className='container'>
          <Commontwosection
          title="Admin Controls"
          desc="We have built-in audit and logging tools for admins, so you can monitor your organization and see who accessed or modified passwords."
          imgsrc={admincontrol}
          />
        </div>
      </div>
      <div className='ease-sec blue-background margin-bottom row-reverse'>
        <div className='container'>
          <Commontwosection
          title="Security in-depth"
          desc="We use best-in-class detection and monitoring services to spot suspicious behavior across your accounts."
          desc2="We will notify you if we see any suspicious activity on any of your accounts and attempt to verify the user’s authorization."
          imgsrc={securitydepth}
           />
        </div>
      </div>
      <div className='encrypt-sec text-center'>
        <div className='container'>
          <Common 
          title="Accredited Secure Hosting Provider"
          desc="Passwords are of critical importance to your business, so we've built the most secure password manager available using the strongest encryption available, AES 256-bit. Our hosting provider is accredited with the the following standards:"
          />
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
          title="The Password Manager for Teams"
          desc="TeamPassword is the fastest, easiest and most secure way to store and share team logins and passwords."
          visit="/signup"
          btnName="Get Started!"
          />
        </div>
      </div>
    </>
  )
}
  