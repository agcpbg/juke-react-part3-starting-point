import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;

    this.selectAlbum = this.selectAlbum.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.selectPlaylist = this.selectPlaylist.bind(this);
  }

  componentDidMount () {

    Promise
      .all([
        axios.get('/api/albums/'),
        axios.get('/api/artists/'),
        axios.get('/api/playlists')
      ])
      .then(res => res.map(r => r.data))
      .then(data => this.onLoad(...data));
  }

  onLoad (albums, artists, playlists) {
    this.setState({
      albums: convertAlbums(albums),
      artists: artists,
      playlists: playlists
    });
  }

  addPlaylist(playlistName) {
    axios.post('/api/playlists', { name: playlistName })
    .then(res => res.data)
    .then(playlist => {
      this.setState({
        playlists: [...this.state.playlists, playlist]
      });
    });
  }

  selectPlaylist(playlistId) {
    axios.get('/api/playlists/' + playlistId)
    .then(res => res.data)
    .then(playlist => {
        playlist.songs = playlist.songs.map(song => {
          convertSong(song);
      })
      this.setState({
        selectedPlaylist: playlist
      });
    });
  }

  selectAlbum (albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: convertAlbum(album)
      }));
  }

  selectArtist (artistId) {
    Promise
      .all([
        axios.get(`/api/artists/${artistId}`),
        axios.get(`/api/artists/${artistId}/albums`),
        axios.get(`/api/artists/${artistId}/songs`)
      ])
      .then(res => res.map(r => r.data))
      .then(data => this.onLoadArtist(...data));
  }

  onLoadArtist (artist, albums, songs) {
    songs = songs.map(convertSong);
    albums = convertAlbums(albums);
    artist.albums = albums;
    artist.songs = songs;

    this.setState({ selectedArtist: artist });
  }

  render () {

    const props = Object.assign({}, this.state, {
      selectAlbum: this.selectAlbum,
      selectArtist: this.selectArtist,
      artists: this.state.artists,
      addPlaylist: this.addPlaylist,
      selectPlaylist: this.selectPlaylist,
    });

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar playlists={this.state.playlists} />
        </div>
        <div className="col-xs-10">
        {
          this.props.children && React.cloneElement(this.props.children, props)
        }
        </div>
        <Player />
      </div>
    );
  }
}
