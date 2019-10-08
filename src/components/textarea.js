import React from 'react';


const Textarea = (props) => {
  return (
    <div className='textarea col area col-8 col-lg-5 m-4'>
      <textarea id='editor' value={props.value} onChange={props.handle}/> 
    </div>
  )
}

export default Textarea