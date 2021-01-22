import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import youtubeAPI from '../api/youtube'

const KEY = "AIzaSyCYbLfWNR2VkRnAN4CnMNjD44Xh_kAoaAE"
class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onSearchSubmit('buildings')
  }

  onSearchSubmit = async(term) => {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
