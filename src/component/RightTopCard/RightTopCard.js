import React from "react";
import Style from './RightTopCard.module.css'
import {AiOutlineUser} from "react-icons/ai";

import {MdOutlineMailOutline} from "react-icons/md";
import {MdOutlineCall} from "react-icons/md";

import {RiDeleteBin6Line} from "react-icons/ri";
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import { useRecoilState } from "recoil";
import { UserListData } from "../../RecoilState/UserListData";
import EditForm from "../EditForm/EditForm";
 

export default function RightTopCard() {
    const [ personDetails , setPersonDetails] = useRecoilState(RecoilRightSection)
    const [ customerDetails , setCustomerDetails] = useRecoilState(UserListData)
    console.log(personDetails , " i am from right top card")

    function DeleteUser() {
        const filterUserDetail = customerDetails.filter(x=> x.Email !== personDetails.Email)
        console.log(filterUserDetail, "i want to delete")
        setCustomerDetails([...filterUserDetail])
        setPersonDetails({})
    }
  return (
    <>
    <div className={Style.main}>
      <img className={Style.image} src={personDetails.Image}/>
      <div className={Style.profile}>
      <h3>{personDetails.FirstName} {personDetails.LastName}</h3>
       <div>
         <div className={Style.UserDetail}>
              <span><AiOutlineUser/>{personDetails.UserName}</span>
              <span><MdOutlineMailOutline/>{personDetails.Email}</span>
              <span>< MdOutlineCall/>{personDetails.PhoneNUmber}</span>
         </div>
         <div className={Style.button}>
         <EditForm />
           
           <button onClick={DeleteUser} className={Style.btnDlt}><RiDeleteBin6Line/> Delete Customer</button>

         </div>
      </div>
      </div>
    </div>
   
    </>
  );
}
