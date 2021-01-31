import { useState, useEffect } from 'react';
import youtubeAPI from '../api/youtube'

const KEY = "AIzaSyCYbLfWNR2VkRnAN4CnMNjD44Xh_kAoaAE"

const useVideos = (searchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(searchTerm)
  }, [searchTerm])

  const search = async(term) => {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    })
    setVideos(response.data.items)
  }

  return [videos, search]
}

export default useVideos