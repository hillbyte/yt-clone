import React from "react";
import VideoItem from "./VideoItem";

const Video = ({ videos, onSelectedVideo }) => {
  let RenderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id}
        video={video}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });
  return <div>{RenderList}</div>;
};

export default Video;
