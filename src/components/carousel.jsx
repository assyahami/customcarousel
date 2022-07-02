import React,{useState} from 'react'
import {imgarr} from "../customdb/carouseldb"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Carousel() {
const [customind, setCustomind] = useState(0)
const [anime, setAnime] = useState(false)
const imglength=imgarr.length
const handlenext=()=>{
    setCustomind(customind===imglength-1?0:customind+1)
    setAnime(true)
  }  
const handleprev=()=>{
    setCustomind(customind === 0 ? imglength - 1 : customind - 1);
    setAnime(false)

  }  
console.log(customind)
return (
  <>
    <div className="culcontainer">
      <div className="">
        <button id="btn" onClick={handleprev}><FaArrowLeft/></button>
      </div>
      {imgarr.map((item, index) => {
        if (index === customind) {
          return (
            <div
              className={`"culcontent" ${anime ? 'prevanime' : 'nextanime'}`}
              key={item.id}
            >
              <img src={`${item.img}`}  alt="loading..." id="curtimg" />
              <div className="carocontent">
                <span>{item.name}</span>
                <button id="btn">view plan</button>
              </div>
        <div id="dotscontainer">
          {[...Array(5).keys()].map((item, I) => {
            console.log(index);
            return (
              <span
                className={`dots ${ customind===I  ? 'active' : ''}`}
                key={I}
              >
              </span>
            );
          })}
        </div>
            </div>
          );
        }
      })}
      <div className="">
        <button id="btn" onClick={handlenext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
    
  </>
);
}

export default Carousel