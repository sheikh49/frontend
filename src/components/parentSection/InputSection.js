import React from 'react'
import InputComponents from './InputComponents'
import OutputComponents from './OutputComponenets'
import Result from './Result'
import "./parentStyles.css"

const InputSection = () => {
  return (
    <div className='inputresult'>
        <InputComponents/>
        
        <Result/>
        <OutputComponents/>
    </div>
  )
}

export default InputSection

