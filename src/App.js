import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState(null);

  useEffect(() => {
    onTermSubmit('Building Information Modeling');
  }, []);

  const onTermSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term },
      });
      setVideos(response.data.items);
      setSelectedVideos(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onVideoSelected = (video) => {
    setSelectedVideos(video);
    console.log(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} selectedVideoList={onVideoSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
