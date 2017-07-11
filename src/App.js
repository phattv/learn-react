import React from 'react';

class App extends React.Component {
  constructor() {
    super(); // 'this' keyword gets reference to this component
    this.state = {
      text: 'this is the state text',
      cat: 0
    }
  }

  update(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.text} - {this.state.cat}</h1>
      </div>
    )
  }
}

export default App;