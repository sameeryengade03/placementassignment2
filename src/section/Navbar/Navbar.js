import { RecoilRightSection } from "../../RecoilState/RecoilRightSection"
import { useRecoilValue } from "recoil"
import {GrNotes} from "react-icons/gr";
import style from './Navbar.module.css'

export default function Navbar() {
    const personDetail = useRecoilValue(RecoilRightSection)
    return(
        <>
       <div className={style.wrap}>
      
       <h3>  <GrNotes style={{color : "white"}} />Khaata Book</h3>
       <div className={style.user}>
       <h3>Customer Admin</h3>
       <div className={style.admin}>
       {!personDetail.Image ? "" :
      <img className={style.image} src={personDetail.Image} width="20px" alt="profile"  />
       }
       <h3>{personDetail.UserName}</h3>
       </div>
       </div>
       </div>
        </>
    )
}