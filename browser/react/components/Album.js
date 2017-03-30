import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {

  componentDidMount () {
    const selectAlbum = this.props.selectAlbum;
    const albumId = this.props.routeParams.albumId;

    selectAlbum(albumId);
  }

  render () {
    const album = this.props.selectedAlbum;

    // If we want to make music work again, we would need these props.
    // We're going to comment them out for now though - they're extra credit ;)

    // const currentSong = this.props.currentSong;
    // const isPlaying = this.props.isPlaying;
    // const toggleOne = this.props.toggleOne;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}

export default Album;
