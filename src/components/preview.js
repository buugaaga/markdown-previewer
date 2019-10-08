import React from 'react'
// import marked from 'marked'
import './previewer.css'

const Preview = (props) => {
  return (
    <div id='preview' className='preview col col-8 col-lg-5 m-4 flex-column overflow-auto' dangerouslySetInnerHTML={{__html: props.marked}}>
    
    </div>
  )
}

export default Preview