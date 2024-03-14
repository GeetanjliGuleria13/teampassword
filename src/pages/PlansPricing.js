import React, {useState} from 'react';
import ReactSwitch from "react-switch";
import priceimg from "../assets/images/discount-badge-red.c803690d.svg"
// import { Cardprice } from '../Components/Card';
// import { Pricecarddata } from '../Components/Commondata';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { NavLink } from 'react-router-dom';
import Commonlogo from '../Components/Commonlogo';
import { Commontourlogodata, Pricecarddata, FaqQuestions } from '../Components/Commondata';
import Common, { FaqAccordian } from '../Components/Common';
import { Cardprice } from '../Components/Card';



  

export default function PlansPricing() {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const [data, setData] = useState(FaqQuestions);
  return (
    <>
      <div className='pricing-banner'>
        <div className='container'>
          <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
            <div className='d-flex flex-column'>
              <h1 className='text-white h3'>{checked ? "Yearly" : "Monthly"} Plans</h1>
              <p className='text-white price-desc pt-4'>Flexible password management for teams of all sizes. Add, share, and manage all of your internal and client passwords: website, social media, blog, email marketing, and more.</p>
            </div>
            <div className='price-percentage-sec position-relative'>
              <img className="position-absolute p-0" src={priceimg} alt="price img" />
              <p className='text-white h4 position-relative '>Up to <strong>{checked ? "8" : "4"}0%</strong> off</p>
            </div>
          </div>
          <label className='switch-sec'>
            <span>Bill monthly</span>
            <ReactSwitch
              onChange={handleChange}
              checked={checked}
              className="react-switch"
            />
            <span>Bill annually</span>
          </label>
          <div className='row align-items-center price-sec'>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h6>Starter</h6>
                  <p>The easy to use password sharing platform</p>
                  <div className='price-licence d-flex align-items-center'>
                    <PersonAddAltIcon/>
                    <span>5 licenses included</span>
                  </div>
                  <div className='price-trial common-btn'>
                    <NavLink to="/signup">Start Free Trial</NavLink>
                  </div>
                  <p className='actual-price'>${checked ? "6.34" : "7.60" }</p>
                  <div className='compare-price-sec d-flex'>
                    <span className='coin-icon'>$</span>
                    <span className="compare-price">{checked ? "1.27" : "4.56" }</span>
                  </div>
                  <p className='price-desc'>PER USER PER MONTH</p>
                  <span className='monthdesc'>*For the first 6 months</span>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='popular-card'>
                    <span>✨ Most Popular ✨</span>
                  </div>
                  <h6>Standard</h6>
                  <p>The simplest way to secure your small team</p>
                  <div className='price-licence d-flex align-items-center'>
                    <PersonAddAltIcon/>
                    <span>15 licenses included</span>
                  </div>
                  <div className='price-trial common-btn'>
                    <NavLink to="/signup">Start Free Trial</NavLink>
                  </div>
                  <p className='actual-price'>${checked ? "4.16" : "5.00" }</p>
                  <div className='compare-price-sec d-flex'>
                    <span className='coin-icon'>$</span>
                    <span className="compare-price">{checked ? "0.83" : "3.00" }</span>
                  </div>
                  <p className='price-desc'>PER USER PER MONTH</p>
                  <span className='monthdesc'>*For the first 6 months</span>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h6>Enterprise</h6>
                  <p>The password manager that scales with business</p>
                  <div className='price-licence d-flex align-items-center'>
                    <PersonAddAltIcon/>
                    <span>30+ licenses included</span>
                  </div>
                  <div className='price-trial common-btn'>
                    <NavLink to="/signup">Start Free Trial</NavLink>
                  </div>
                  <p className='actual-price'>${checked ? "4.16" : "5.00" }</p>
                  <div className='compare-price-sec d-flex'>
                    <span className='coin-icon'>$</span>
                    <span className="compare-price">{checked ? "0.83" : "3.00" }</span>
                  </div>
                  <p className='price-desc'>PER USER PER MONTH</p>
                  <span className='monthdesc'>*For the first 6 months</span>
                </div>
              </div>
            </div>
          </div>
          <div className='tour-banner-logo-sec mt-5'>
            <h6 className='text-lightblue pb-3 pt-4 text-center'>TRUSTED BY</h6>
            <div className='tour-banner-logo-sec-inner d-flex justify-content-around align-items-center flex-wrap'>
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
      <div className='ease-sec price-manager-sec'>
        <div className='container'>
          <Common
          title= "TeamPassword Manager Product Tour"
          desc="TeamPassword is the simple, secure team password manager designed from the ground up with ease-of-use and collaboration in mind."
          />
          <div className='row price-security'>
            {
              Pricecarddata.map((val,index)=>{
                return <Cardprice 
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  desc={val.desc}
                  cardlink={val.cardlink}
                  cardlinkdata={val.cardlinkdata}
                />
              })
            }
          </div>
        </div>
      </div>
      <div className='faq-sec ease-sec blue-background'>
        <div className='container'>
          <h4>Frequently Asked Questions</h4>
          <div className="faq-main mt-4 pt-2">
            {
              data.map((curElem)=>{
                const {id} = curElem;
                return <FaqAccordian 
                  key={id} {...curElem}
                />
              })

            }
          </div>
        </div>
      </div>
    </>
  )
}
