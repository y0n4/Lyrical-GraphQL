// fetching list of songs
import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag'; // to write graphql queries
import { graphql } from 'react-apollo';
import query from '../queries/fetchSongs'

class SongList extends Component {

  deleteSong(id) { // delete song when trash icon is clicked
    this.props.mutate({ variable: { id } })
  }

  renderSongs() { // renders all songs into a list form
    return this.props.data.songs.map(({ id, title }) => {
      return(
        <li key={id} className="collection-item">
          {title}
          <i 
            className="material-icons" 
            style={{float: "right"}}
            onClick={() => this.deleteSong(id)}
          >
            delete_outline
          </i>
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

const mutation = gql`
  mutation DeleteSong($id:ID) {
  deleteSong(id: $id) {
    id
    title
  }
}
`;

export default graphql(mutation) (
  graphql(query)(SongList)
) // calls query first then renders SongList component