import React, { Component } from 'react';

export default class EducationalPreview extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { university, programme, degree, city, from, to } = this.props;

    return (
      <div className='preview-educational'>
        <div className='decoration x'></div>
        <div className='decoration o'></div>
        <div className='decoration t'></div>
        <h3>Education</h3>
        <div className='one-edu-entry'>
          <div className='row-1 edu'>
            <div className='uni'>
              <h4>{university},</h4>
              <p>{city} |</p>
              <p>{from} -</p>
              <p>{to}</p>
            </div>
          </div>
          <div className='extra-info'>
            <div className='programme-degree'>
              <h6>{programme},</h6>
              <p>{degree}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
