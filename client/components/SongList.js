// fetching list of songs
import React, { Component } from 'react';
import gql from 'graphql-tag'; // to write graphql queries
import { graphql } from 'react-apollo';

class SongList extends Component {
  render () {
    return (
      <div>
        SongList
      </div>
    )
  }
}

// fetch all songs
const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList); // calls query first then renders SongList component