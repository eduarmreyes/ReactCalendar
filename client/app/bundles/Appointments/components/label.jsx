import React, { Component } from 'react';

export default class Label extends Component {
  render () {
    return (
      <div>
        <div>{this.props.label}</div>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};
