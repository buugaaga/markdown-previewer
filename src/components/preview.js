import React from 'react'

const Preview = (props) => {
  return (
    <div id='preview' className='preview area col col-8 col-lg-5 m-4 flex-column' dangerouslySetInnerHTML={{__html: props.marked}}>
    
    </div>
  )
}

export default Preview