// fetching list of songs
import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag'; // to write graphql queries
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return(
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render () {
    if (this.props.data.loading) { return <div>loading...</div>};
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

// fetch all songs
const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList); // calls query first then renders SongList component