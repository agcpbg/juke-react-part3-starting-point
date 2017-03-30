import React from 'react';
import Songs from './Songs';

export default class Playlist extends React.Component {

  componentDidMount () {
    this.props.selectPlaylist(this.props.routeParams.playlistId);
  }

  componentWillReceiveProps (nextProps) {
    console.log('next', nextProps);
    console.log('this', this.props);
    if (nextProps.routeParams.playlistId !== this.props.routeParams.playlistId) {
      this.props.selectPlaylist(nextProps.routeParams.playlistId);
    }
  }

  render() {

    const playlist = this.props.selectedPlaylist;

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }

}
