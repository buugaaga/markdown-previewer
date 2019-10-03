import React from 'react';
import './textarea.css'

const Textarea = (props) => {
  return (
    <div className='textarea col col-8 col-lg-5 mt-2'>
      <textarea id='editor' value={props.value} onChange={props.handle}/> 
    </div>
  )
}

export default Textarea