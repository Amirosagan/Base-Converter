import React from 'react'
import { MdOutlineSwapVerticalCircle } from 'react-icons/md'
import { GrPowerReset } from 'react-icons/gr'


function Buttons({calc , reset}) {
  return (
    <div className='buttons-group'>
        <button type="submit" ref={calc}>Calaculate <MdOutlineSwapVerticalCircle /></button>
        <button type="reset" ref={reset} >Reset <GrPowerReset /></button>
    </div>
  )
}

export default Buttons