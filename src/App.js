import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import './App.css'

import Textarea from './components/textarea'
import Preview from './components/preview'
import marked from 'marked'

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://github.com/buugaaga), and
 > Block Quotes!

**And of course there are lists:**
  - Some are bulleted.
  - With different indentation levels.
  - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

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
    let html = marked(this.state.value)
    return html
  }
  render() {
    
    return (
      <div className='wrapper container'>
        <div className='row justify-content-around'>
          <h1 className='h1'>Markdown preview from Eldar :))</h1>
          
          <Textarea  value={this.state.value} handle={this.handleTextArea} />
          <Preview marked={this.handleMarked()}/>
        </div>
      </div>
    )
  }
}

export default App