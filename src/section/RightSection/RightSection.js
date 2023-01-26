import style from './RightSection.module.css'
import { useRecoilValue } from 'recoil'
import RightTopCard from '../../component/RightTopCard/RightTopCard'
import RightBottomCard from  '../../component/RightBottomCard/RightBottomCard'
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'

export default function RightSection() {
    const rightSecUserDetail = useRecoilValue(RecoilRightSection)
    console.log(rightSecUserDetail,"I am from recoil , Right")
    return(
        <>
        {rightSecUserDetail.UserName ?
        <div className={style.container}>
      <RightTopCard />
      <RightBottomCard />
      </div>
      :""
    }
        </>
    )
}