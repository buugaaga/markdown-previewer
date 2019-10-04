import React from 'react'
// import marked from 'marked'
import './previewer.css'

const Previewer = (props) => {
  return (
    <div id='preview' className='previewer col col-8 col-lg-5 m-5 flex-column overflow-auto' dangerouslySetInnerHTML={{__html: props.marked}}>
    
    </div>
  )
}

export default Previewer