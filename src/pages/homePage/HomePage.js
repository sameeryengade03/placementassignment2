import LeftSection from "../../section/LeftSection/LeftSection";
import Navbar from "../../section/Navbar/Navbar";
import RightSection from "../../section/RightSection/RightSection";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={style.container}>
      <div className={style.nav}>
        <Navbar />
        </div>
        <div className={style.subContainer}>
          <div className={style.leftSec}>
            <LeftSection />
          </div>
          <div className={style.rightSec}>
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
}
