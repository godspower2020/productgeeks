import React from 'react'
import Login from './Login'

const Prompt = ({headingText}) => {
  return (
    <div className='login-prompt'>
      <div className='white-background'>
        <Login headingText={headingText} useParagraphTag={true} />
      </div>
    </div>
  )
} 

export default Prompt