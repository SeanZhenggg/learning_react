import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot) {
  module.hot.accept()
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    this.state = { 
      latitude: null,
      errorMsg: ''
    }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState, setState is React.Component method inherited by App component
        this.setState({ latitude: position.coords.latitude })
        // WE DID NOT DO THIS!!
        // this.state.latitude = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMsg: err.message })
      }
    );
  }
  render() {
    if(this.state.errorMsg && !this.state.latitude) {
      return <div>Error: { this.state.errorMsg }</div>
    } else if (!this.state.errorMsg && this.state.latitude) {
      return <div>Latitude: { this.state.latitude }</div>
    }
    return <div>Loading ...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
