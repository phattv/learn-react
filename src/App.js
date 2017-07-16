import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }

  update(event) {
    let code = event.target.value;
    try {
      this.setState({
        output: window.Babel
          .transform(code, {
            presets: ['es2015', 'react']
          })
          .code
      })
    }
    catch (err) {
      this.setState({
        err: err.message
      })
    }
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update.bind(this)}
                    defaultValue={this.state.input}></textarea>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
