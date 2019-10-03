import React from 'react'
// import marked from 'marked'
import './previewer.css'

const Previewer = (props) => {
  return (
    <div id='preview' className='previewer col col-8 col-lg-5 mt-2 flex-column' dangerouslySetInnerHTML={{__html: props.marked}}>
    
    </div>
  )
}

export default Previewer