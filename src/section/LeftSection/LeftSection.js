import CustomButton from "../../component/Form/Form";
import InputBox from "../../atom/Input/Input";
import LeftSecCard from "../../component/LeftSectionCard/LeftSectionCard";
import style from './LeftSection.module.css'
import { useState } from "react";
export default function LeftSection() {
    const [ searchValue , setSearchValue] = useState("")
    return(
        <>
        <div className={style.wrap}>
        <div className={style.inputAndBtn}>
        <input className={style.inputBtn} value={searchValue} placeholder="Customer Search" onChange={(e)=>setSearchValue(e.target.value)}/>
        
        <CustomButton className={style.btn} buttonText = "+"/>
        </div>
        <div className={style.card}>
        <LeftSecCard searchValue={searchValue} />
        </div>
        </div>
        </>
    )
}