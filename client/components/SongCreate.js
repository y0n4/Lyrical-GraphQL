import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props) {
     super(props);
     this.state = {
      title: '',
     }
  }

  // makes graphql to save the song title to database when submitted
  onSubmit(event) {
    event.preventDefault(); // prevents form to submit itself
    
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Create new song</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={event => this.setState({title: event.target.value})} value={this.state.title}/>
        </form>
      </div>
    );
  }
}

// write mutation to create song title
const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);