import * as React from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import TextPreviewer from './components/TextPreviewer';

class App extends React.Component {
  state = {
    text: ''
  };

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/inescoelho/0e8305febed09ff640c2f4dbd7b951b4/' +
    'raw/6b26ad877946889dbd3a6d7367bb0377bac99a5a/md-language-test.txt';

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
