import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import showdown from 'showdown'

// import eldar from './assets/eldar.jpg'
import './App.css'

import Textarea from './components/textarea'
import Previewer from './components/previewer'

const defaultText = `

<h1> hi babay </h1>

<h2> this is the project work from Nasyrov Eldar </h2>
<b> what study i here?</b>

<ol>
  <li>using React and it features</li>
  <li>library downmarked</li>
  <li>don't forgot textarea</li>
  <li>etc))</li>
</ol>
  <a href="https://github.com/buugaaga">my home page on github</a>
  <q>FreeCodeCamp</q>
  \`one line code \`

<pre><code> more line code </code><pre>
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
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
  handleMarked = () => {
    let converter = new showdown.Converter()
    let html = converter.makeHtml(this.state.value)
    return html
  }
  render() {
    
    return (
      <div className='wrapper container'>
        <div className='row justify-content-around'>
          <h1 className='h1'>ILDAR</h1>
          
          <Textarea  value={this.state.value} handle={this.handleTextArea} />
          <Previewer marked={this.handleMarked()}/>
        </div>
      </div>
    )
  }
}

export default App