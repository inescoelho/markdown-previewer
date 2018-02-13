import * as React from 'react';
import './App.css';
import MarkdownEditor from './components/markdown_editor';
import TextPreviewer from './components/text_previewer';

class App extends React.Component {
  state = {
    text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \n' +
      'Paragraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  ' +
      '\nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n' +
      '* apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n' +
      'The rain---not the reign---in\nSpain.\n\n *[Ines Coelho](http://www.inescoelho.info/)*'
  };

  updateText = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    this.setState (
      { text }
    );
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header row">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <div className="row">
          <MarkdownEditor markdownText={this.state.text} handleTextChange={this.updateText} />
          <TextPreviewer markdownText={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
