import React, { Component } from 'react';
import GeneralPreview from '../CVPreview/general_preview';
import { FaUpload } from 'react-icons/fa';

export default class General extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: ['', false],
        email: ['', false],
      },
      inputs: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      personal: {
        name: [e.target.value, true],
        email: ['', false],
      },
    });
  };

  render() {
    const { personal } = this.state;

    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>General Information</h2>

            <div className='col-1-col-2'>
              <div className='col-1'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  value={personal.name[0]}
                  onChange={this.handleChange}
                  type='text'
                  id='fullName'
                />

                <label htmlFor='email'>Email</label>
                <input
                  value={personal.email[0]}
                  onChange={this.handleChange}
                  type='text'
                  id='email'
                />

                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' />
              </div>

              <div className='col-2'>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' />

                <label htmlFor='email'>Description</label>

                <textarea
                  name='description'
                  id='description'
                  cols='30'
                  rows='3'
                ></textarea>

                <label htmlFor='photo' className='photo-upload'>
                  <FaUpload />
                  <p>Upload Photo</p>
                </label>
                <input type='file' id='photo' alt='photo' />
              </div>
            </div>
          </div>
        </div>
        <div className='preview'>
          <GeneralPreview
            fullName={personal.name[0]}
            email={personal.email[0]}
          />
        </div>
      </div>
    );
  }
}
