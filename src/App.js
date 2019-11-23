import React from 'react';
import './index.css';
import './tailwind.css';

const marked = require('marked');

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  // eslint-disable-next-line
  return `<a href="${href}">${text}` + '</a>';
}

class App extends React.Component {
  render(){
  return (
    <div>
      <SiteNavbar/>
      <MarkDown/>
    </div>
  );
};
};

class SiteNavbar extends React.Component {
  render() {
    return(
      <div>
        <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
    <div>
      <h1 className="h-8 text-white font-mono font-extrabold text-lg">Markdown-Previewer</h1>
    </div>
    <div >
    { /* button for hamburger */ }
    </div>
  </header>
      </div>
    )
  };
};

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markDownText: placeholder
    };
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState ({
      markDownText: event.target.value
    });
  }

  render() {
    return(
      <div className="flex flex-wrap -mx-2 -my-2">
        <div className="mx-2 px-2 my-2 py-2 w-1/3 ml-auto overflow-hidden">
          <textarea placeholder={placeholder} onChange={this.handleChange} value={this.props.markDownText} className="text-white h-screen w-full resize-y border rounded focus: shadow-inner bg-gray-900  border-black " id="editor" type="text"></textarea>
        </div>
        <div className="my-2 px-2 my-2 py-2 w-1/3 mr-auto overflow-hidden">
          <div className=" inline-block h-screen w-full bg-gray-700 border border-white" id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markDownText, { renderer: renderer })}}></div>
        </div>
      </div>
    )
  };
};

const placeholder = 
`# Welcome to my React based Github Flavored Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
`



export default App;
