import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import useVideos from './hooks/useVideos';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useVideos('Building Information Modeling');

  useEffect(()=>{
    setSelectedVideos(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} selectedVideoList={setSelectedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
