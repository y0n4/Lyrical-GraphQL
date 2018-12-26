import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {

  }

  renderLyrics() {
    console.log(this.props.lyrics)
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li
          key={id}
          className="collection-item"
        >
          {content}
          <i
            className="material-icons"
            onClick={() => this.onLike(id)}
          >
            thumb_up</i>
        </li>
      )
    });
  }

  render () {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric ($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricList;