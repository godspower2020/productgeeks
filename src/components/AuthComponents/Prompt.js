import React from 'react'
import Login from './Login'

const Prompt = ({headingText}) => {
  return (
    <div className='login-prompt'>
        <Login headingText={headingText} useParagraphTag={true} />
    </div>
  )
}

export default Prompt