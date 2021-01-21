import React from 'react';
import SearchBar from './SearchBar';

// import youtubeAPI from '../api/youtube'
class App extends React.Component {

  onSearchSubmit = async(term) => {
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
