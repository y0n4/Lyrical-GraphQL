import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongDetail from '../queries/fetchSongDetail';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) { return <div>Loading...</div> } // while retrieving info
    
    return (
      <div>
        <Link
          to="/"
        >
          <i className="material-icons">arrow_back_ios</i>
        </Link>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(fetchSongDetail, {
  options: (props) => {
    return { variables: { id: props.params.id } } }
})(SongDetail);