import React, {Component} from 'react';
import ShowTime from './ShowTime.js';

class ShowTimesList extends Component {
  render() {
    const showTimeNodes = this.props.data.map((movie) => {
      return (
        <ShowTime title={movie.title} url={movie.url} key={movie.id}>
          {movie.text}
        </ShowTime>
      );
    });

    return (
      <div className="show-time-list">
        {showTimeNodes}
      </div>
    );
  }
}

export default ShowTimesList;
