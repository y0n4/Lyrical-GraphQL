import React, { Component } from 'react';
import gql from 'graphql-tag'; // write grapqhl as javascript
import { graphql } from 'react-apollo'; // allows us to write query and use into component

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  onSubmit(event) { // submit one line of lyric
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({content: ''})); // clears input at end
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input 
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);