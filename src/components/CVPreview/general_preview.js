import React, { Component } from 'react';

export default class GeneralPreview extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='preview-general'>
        <p className='one'>Name: {this.props.fullName}</p>
        <p className='two'>Email: {this.props.email}</p>
      </div>
    );
  }
}
