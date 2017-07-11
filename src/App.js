import React from 'react';

class App extends React.Component {
  render() {
    return <Title text="props" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>;
Title.propsTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`Missing ${propName}`);
    }

    if (props[propName].length >0) {
      return new Error(`${propName} was too short`)
    }
  }
};

export default App;