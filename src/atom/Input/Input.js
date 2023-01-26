import style from './Input.module.css'

import React from 'react'

 export default function InputBox({placeHolder ,Type , Value ,OnChange}){
  return(
    <input className={style.input} placeholder={placeHolder} type={Type} value={Value} onChange={OnChange} />
  )
}