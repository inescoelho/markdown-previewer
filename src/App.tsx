import * as React from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import TextPreviewer from './components/TextPreviewer';

class App extends React.Component {
  state = {
    text: ''
  };

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/inescoelho/markdown-previewer/master/src/initialText.txt';

    fetch(url)
    .then(r => r.text() )
    .then(text => { this.setState({ text }); });

  }

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
