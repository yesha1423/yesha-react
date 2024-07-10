import React from 'react'
import img from './img/chhokri.png'
import './profile.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoSnapchat } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";

export function Profile(){
  return (
    <div>
        <div className='cnt d-flex flex-sm-column flex-md-row mt-5'>
                <div className='disc text-start ps-5 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-sm-center text-md-start ' style={{marginTop:"95px"}}>
                    <h1>Hieyy, I'm Yesha Rathwa! </h1>
                    <br/><br/>
                    <p className='text-sm-center text-md-start' style={{fontSize:"16px"}}>she is a freelance journalist. If someone works freelance, they are not employed by one organization, but are paid for each piece of work. she is now working freelance from her home.</p>
                    <button style={{padding:"15px",marginTop:"20px",borderRadius:"25px",backgroundColor:"lightgray"}}>I'M AVAILBLE</button>
                    <br /><br />
                    <div className='icons'>
                    <GrFacebookOption  />
                    <FaXTwitter style={{marginLeft:"10px"}}/>
                    <BiLogoSnapchat style={{marginLeft:"10px"}} />
                    <RiInstagramFill style={{marginLeft:"10px"}} />
                </div>
                </div>  
                <div className='imgs col-sm-12 col-md-6 col-lg-6 col-xl-6 d-sm-none d-md-block'>
                    <img src={img} style={{height:"450px",marginTop:"87px",width:"450px"}}/>
                </div>
        </div>
    </div>
  )
}

export default Profile