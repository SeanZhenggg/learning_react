import React from 'react'
import './VideoItem.css'
const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet
  return (
    <div onClick={() => { onVideoSelect(video) }} className="item video-item">
      <img 
        src={thumbnails.medium.url}
        alt={video.snippet.title} 
        className="ui image"
      />
      <div className="content">
      <div className="header">{title}</div>
      </div>
    </div>
    )
}

export default VideoItem
