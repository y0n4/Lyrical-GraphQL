import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchSongs'

class SongCreate extends Component {
  constructor(props) {
     super(props);
     this.state = {
      title: '',
     }
  }

  // makes graphql save the song title to database when submitted
  onSubmit(event) {
    event.preventDefault(); // prevents form to submit itself
    
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }] // immediately refetches info and new song
    }).then(() => { hashHistory.push('/') }) // takes user back to songList component
  }

  render() {
    return (
      <div>
        <Link
          to="/"
        >
          <i className="material-icons">arrow_back_ios</i>
        </Link>
        <h3>Create new song</h3>
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