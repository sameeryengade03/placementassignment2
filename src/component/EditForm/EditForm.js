import * as React from 'react';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import { RecoilRightSection } from '../../RecoilState/RecoilRightSection';
import { UserListData } from '../../RecoilState/UserListData';
import { useRecoilState } from 'recoil';
import {BiEdit} from "react-icons/bi";
import Style from './EditForm.module.css'
export default function EditForm() {
    const [editUser, setEditUser] = useRecoilState(RecoilRightSection) // match right sec user data
    const [ customerDetails , setCustomerDetails] = useRecoilState(UserListData) // whole user details
    console.log(editUser,"i came from editbbuton")
    

    const [ userName , setUserName] = useState("")
    const [ firstName , setFirstName] = useState("")
    const [ lastName , setLastName] =useState("")
    const [ date , setDate] = useState("")
    const [ email , setEmail] = useState("")
    const [ phone , setPhone] = useState("")
    const [ gender , setGender] = useState("")
    const [ state , setState] = useState("")
    const [ address , setAddress] = useState("")
    const [ password , setPassword] = useState("")
    const [ Cpassword , setCpassword] = useState("")


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFirstName(editUser.FirstName)
    setLastName(editUser.LastName)
    setUserName(editUser.UserName)
    setDate(editUser.DOB)
    setEmail(editUser.Email)
    setPhone(editUser.PhoneNUmber)
    setGender(editUser.Gender)
    setState(editUser.State)
    setAddress(editUser.Address)
    setPassword(editUser.Password)
    setCpassword(editUser.ConfirmPassword)
    

  };

  const handleClose = () => {
    const updateCustomerDetails = {
        UserName: userName,
        FirstName: firstName,
        LastName: lastName,
        DOB : date,
        Email: email,
        Password: password,
        ConfirmPassword: Cpassword,
        Image: editUser.Image,
        Country:  editUser.Country,
        Address: address,
        State: state,
        City:  editUser.City,
        Zipp: editUser.Zipp,
        Gender : gender,
        PhoneNUmber : phone
      };
      setEditUser(updateCustomerDetails) //update or edit recoil right sect
      const filterUserDetail = customerDetails.filter(x=> x.Email !== editUser.Email)
      console.log(filterUserDetail , "i amm from edit form to be delete")
     
      setCustomerDetails([...filterUserDetail,updateCustomerDetails])


      setFirstName("")
      setLastName("")
      setUserName("")
      setDate("")
      setEmail("")
      setPhone("")
      setGender("")
      setState("")
      setAddress("")
      setPassword("")
      setCpassword("")
      setOpen(false)
  };

  return (
    <div className={Style.wrapper} >
      <button className={Style.btnEdt}  onClick={handleClickOpen}>
      <BiEdit/> Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
    
      <div className={Style.main}>
      <h2>Edit Customer Details</h2>
      <label>User Name : </label>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <label>First Name : </label>
      <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <label>Last Name : </label>
      <input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <label>Email : </label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>Gender : </label>
      <input value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <label>Date : </label>
      <input value={date} onChange={(e)=>setDate(e.target.value)}/>
      <label>Phone Number : </label>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <label>State : </label>
      <input value={state}  onChange={(e)=>setState(e.target.value)}/>
      <label>Password : </label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label>Confirm Password : </label>
      <input value={Cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
      <label>Address : </label>
      <input value={address}  onChange={(e)=>setAddress(e.target.value)}/>
       
    <br/>
    <div className={Style.btn}>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleClose} >
            Edit Done
          </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
