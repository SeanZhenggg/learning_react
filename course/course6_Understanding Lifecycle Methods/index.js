import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

if(module.hot) {
  module.hot.accept()
}

class App extends React.Component {

  state = { latitude: null, errorMsg: '' }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    )
    console.log('this', this)
  }

  renderContent() {
    if(this.state.errorMsg && !this.state.latitude) {
      return <div>Error: { this.state.errorMsg }</div>
    } else if (!this.state.errorMsg && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />
    }
    return <Spinner />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
