import React, { Component } from 'react';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';

export default class GeneralPreview extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, title, email, photo, address, phone, description } =
      this.props;

    return (
      <div className='preview-general'>
        <div className='row-1'>
          <div className='name-section'>
            <div className='name-title'>
              <h2>{fullName}</h2>
              <p>{title}</p>
            </div>
            <div className='address-contact'>
              <div className='phone'>
                <AiFillPhone />
                <p>{phone}</p>
              </div>
              <div className='email'>
                <GrMail />
                <p>{email}</p>
              </div>
              <div className='address'>
                <HiLocationMarker />
                <p>{address}</p>
              </div>
            </div>
          </div>
          <div className='photo-section'>
            <img src={photo} alt='Avatar' />
            <div className='photo-dec-tri-2'></div>
            <div className='photo-dec-tri'></div>
          </div>
        </div>
        <div className='row-2'>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
