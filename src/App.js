import React from 'react';

class App extends React.Component {
  render() {
    let text = this.props.text;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}

App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  text: 'default text'
};

export default App;