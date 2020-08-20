import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Copy text to the Clipboard in React without a package - Clue Mediator",
      btnText: "Copy to Clipboard"
    }
  }

  // handle copy to clipboard
  copyToClipboard = e => {
    this.refs.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ btnText: 'Copied!' });
  };

  render() {
    const { message, btnText } = this.state;
    return (
      <div>
        <h3>Copy text to Clipboard - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
        <textarea
          ref="textArea"
          value={message}
          onChange={e => this.setState({ message: e.target.value, btnText: "Copy to Clipboard" })}
        />
        <br />
        <br />
        {document.queryCommandSupported('copy') && <button onClick={this.copyToClipboard}>{btnText}</button>}
      </div>
    );
  }
}

export default App;