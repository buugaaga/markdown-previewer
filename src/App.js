import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import marked from 'marked'


import './App.css'

import Head from './components/header'
import Textarea from './components/textarea'
import Previewer from './components/previewer'

const defaultText = `
<h1> Hello everyone!</h1>
<h2> This is the project work of Free Code Camp from Eldar Nasyrov </h2>
<b> Primary is move to ahead and all will be well)) </b>

<a href='https://github.com/buugaaga/markdown-previewer'>it is my profile of github</a>
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: defaultText
    }
    this.handleTextArea = this.handleTextArea.bind(this)
    this.handleMarked = this.handleMarked.bind(this)
  }
  componentDidMount = () => {
    let scriptFcc = document.createElement('script')
    scriptFcc.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    scriptFcc.async = true
    document.body.appendChild(scriptFcc)
  }

  handleTextArea(e) {
    let data = e.target.value
    this.setState({
      value: data
    })
  }
  handleMarked = () => marked(this.state.value)
  render() {
    
    return (
      <div className='wrapper container'>
        <div className='row justify-content-around'>
          <h1 className='h1'>ILDAR</h1>
          <Head />
          <Textarea  value={this.state.value} handle={this.handleTextArea} />
          <Previewer marked={this.handleMarked()}/>
        </div>
      </div>
    )
  }
}

export default App