import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return "Loading....";
  } else {
    var videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  }
  return (
    <div>
      <div className="player">
        <iframe
          className="responsive-iframe"
          // width="800"
          // height="415"
          src={videoSrc}
          title="YouTube video player"
          frameborder="3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h5>{video.snippet.title}</h5>
      <p>{video.snippet.publishedAt}</p>

      <h3>
        <b>{video.snippet.channelTitle}</b>
      </h3>
    </div>
  );
};

export default VideoDetails;
