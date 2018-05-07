import React, {Component} from 'react';

class ShowTime extends Component {
  render() {
    return (
      <div className="show-time">
        {/* <h4>{this.props.title}</h4><a href={this.props.url}>Movie Link</a> */}
        <h4><a href={this.props.url}>{this.props.title}</a></h4>
        {this.props.children}
      </div>
    );
  }
}

export default ShowTime;
