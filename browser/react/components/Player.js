import React from 'react';

const Player = (props) => {

  // If we want to make music work again, we would need these props.
  // We're going to comment them out for now though - they're extra credit ;)

  // const currentSong = props.currentSong;
  // const currentSongList = props.currentSongList;
  // const isPlaying = props.isPlaying;
  // const progress = props.progress;
  // const prev = props.prev;
  // const toggle = props.toggle;
  // const next = props.next;

  return (
    <footer>
      <div>
        <div className="pull-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-play"></span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Player;
