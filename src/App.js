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
        <Widget update={this.update.bind(this)}></Widget>
        <Widget update={this.update.bind(this)}></Widget>
        <Widget update={this.update.bind(this)}></Widget>
        <h1>{this.state.text} - {this.state.cat}</h1>
      </div>
    )
  }
}

// Stateless function component
const Widget = (props) =>
  <input type="text"
         onChange={props.update}/>

export default App;