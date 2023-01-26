import React from "react"
import bottomStyle from './RightBottomCard.module.css'
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import { useRecoilState } from "recoil";
 
function RightBottomCard(){
    const [personDetails ,setPersonDetails] = useRecoilState(RecoilRightSection)
  return(
    <>
    <div className={bottomStyle.main}>
      <h2>Personal Details</h2>
      <div className={bottomStyle.Personal}>
        <div className={bottomStyle.details}>
          <span > First Name </span>
          <b >{personDetails.FirstName}</b>
        </div>
        <div className={bottomStyle.details}>
          <span> Last Name </span>
          <b>{personDetails.LastName}</b>
        </div>
        <div className={bottomStyle.details}>
          <span> Gender</span>
          <b>{personDetails.Gender}</b>
        </div>
        <div className={bottomStyle.details}>
       
          <span> Date Of Birth </span>
          <b>{personDetails.DOB}</b>
        </div>
      </div >
      <div className={bottomStyle.Add}>
      <h2>Address</h2>
      <div className={bottomStyle.Add1}><span>Address Line</span><span>{personDetails.Address}</span></div>
      <div className={bottomStyle.Add2}><span>Zip Code</span><span>{personDetails.Zipp}</span></div>
      <div className={bottomStyle.Add1}><span>City</span><span></span>{personDetails.City}</div>
      <div className={bottomStyle.Add2}><span>State</span><span>{personDetails.State}</span></div>
      <div className={bottomStyle.Add1}><span>Country</span><span>{personDetails.Country}</span></div>
      <div className={bottomStyle.Add2}><span>Contact</span><span>{personDetails.PhoneNUmber}</span></div>
      </div>
      </div>
    
    </>
  )
}
export default RightBottomCard