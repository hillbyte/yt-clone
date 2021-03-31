import React, { Fragment, useState, useEffect } from "react";
import Search from "./Component/Search";
import Video from "./Component/Video";
import VideoDetails from "./Component/VideoDetails";
import yt from "./yt";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [SelectedVideo, setSelectedVideo] = useState(null);

  let onTermSubmit = async (term) => {
    let res = await yt.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(res.data.items);
    setVideos(res.data.items);
    onSelectedVideo(res.data.items[0]);
  };
  let onSelectedVideo = (video) => {
    // return video;
    setSelectedVideo(video);
  };
  useEffect(() => {
    onTermSubmit("kgf2");
  }, []);

  return (
    <Fragment>
      <Search onTermSubmit={onTermSubmit} />
      <main className="">
        <div className="row my-4 ml-3">
          <div className="col-md-8">
            <VideoDetails video={SelectedVideo} />
          </div>
          <div className="col-md-4">
            <Video videos={videos} onSelectedVideo={onSelectedVideo} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
