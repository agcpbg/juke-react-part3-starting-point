import React from 'react';

const Songs = (props) => {

  const songs = props.songs;

  // If we want to make music work again, we would need these props.
  // We're going to comment them out for now though - they're extra credit ;)

  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggle = props.toggleOne;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <tr key={song.id}>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
              </td>
              <td>{ song.genre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Songs;
