import React, { useEffect, useState } from "react";
import Youtube from "./youtube.svg";

const Search = ({ onTermSubmit }) => {
  let [search, setSearch] = useState({
    term: "",
  });

  let handleChange = (e) => {
    setSearch({ [e.target.name]: e.target.value });
  };
  // voice search func
  let handleVoice = (e) => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    // eslint-disable-next-line no-undef
    let rec = new SpeechRecognition();

    rec.addEventListener("result", (e) => {
      e.preventDefault();
      let transcript = e.results[0][0].transcript.replace(/\s/g, "");
      onTermSubmit(transcript.term);
    });
    rec.start();
  };
  //submit func
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(search.term);
    onTermSubmit(search.term);
  };

  return (
    <div className="container  mx-auto  navbar navbar-light bg-light ">
      <a className="navbar-brand " href="/">
        <img src={Youtube} alt="YouTube" width={100} height={50} />
      </a>
      <form onSubmit={handleSubmit} className="w-75">
        <input
          className="form-control border border-success rounded-pill"
          type="search"
          name="term"
          onChange={handleChange}
          value={search.term}
          placeholder="Search videos..."
        />
        <button
          type="submit"
          className="mx-1 btn btn-sm btn-danger rounded-pill"
        >
          <span style={{ fontSize: "1.3em" }}>
            <i className="fas fa-search" />
          </span>
        </button>
        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Search with Voice"
          type="submit"
          style={{ fontSize: "1.5em", color: "grey" }}
          className="mx-2"
          onClick={handleVoice}
        >
          <i className="fas fa-microphone" />
        </span>
      </form>
    </div>
    // videos

    //end videos
  );
};

export default Search;
