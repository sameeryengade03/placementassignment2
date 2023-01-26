
import style from './LeftSecCard.module.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import {UserListData} from '../../RecoilState/UserListData'


export default function LeftSecCard({searchValue}) {
    const [ transferMatchedData , setTransferMatchedData] = useRecoilState(RecoilRightSection)
    const  DataList  = useRecoilValue(UserListData)
 

    function handleClick(element) {
        console.log(element , "i am clicked data")
        setTransferMatchedData(element)
    }
    console.log(transferMatchedData, "i am deta which will be transfer to recoil via right sec");
    
    
    return(
        <>
        <div className={style.Container}>
          {
            DataList.filter((element)=>element.FirstName.toLowerCase().includes(searchValue.toLowerCase())
              ).map((element)=>
            <div onClick={()=> handleClick(element)} key={element.id} className={style.subContainer}>
            <div><img  className={style.image}src={element.Image} alt="profile" /></div>

            <div>
            <div className={style.name}>{element.FirstName} {element.LastName} </div>
            <div>{element.Email} </div>
            
            </div>
            </div>
            )
          }
        </div>
        </>
    )
}

