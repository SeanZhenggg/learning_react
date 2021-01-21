// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// hot reload failed in index.js https://github.com/facebook/create-react-app/issues/9904
if(module.hot) {
    module.hot.accept()
}

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}> {/* 第一個花括號是告訴JSX現在是要放JS的變數，第二個花括號代表現在放的是一個物件 */}
        {buttonText.text}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
