import React from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div
      // className="container"
      onClick={() => {
        console.log(onSelectedVideo(video));
      }}
    >
      <div>
        <img src={video.snippet.thumbnails.medium.url} alt={video.name} />
      </div>
      <br />
      <div>
        <h5>{video.snippet.title}</h5>
        <hr />
      </div>
    </div>
  );
};

export default VideoItem;
