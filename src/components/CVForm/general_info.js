import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralPreview from '../CVPreview/general_preview';
import { FaUpload } from 'react-icons/fa';
import defaultPhoto from '../../assets/profile.webp';

export default class General extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: 'John Doe',
        id: uniqid(),
      },
      title: {
        text: 'UX Designer',
        id: uniqid(),
      },
      email: {
        text: 'johndoe@gmail.com',
        id: uniqid(),
      },
      phone: {
        text: '217-412-7615',
        id: uniqid(),
      },
      address: {
        text: '3426 Isaacs Creek Road, IL',
        id: uniqid(),
      },
      description: {
        text: 'I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations.',
        id: uniqid(),
      },
      photo: defaultPhoto,
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearOnClick = this.clearOnClick.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  handleChange = (e, key) => {
    this.setState({
      [Object.keys(this.state)[key]]: {
        text: e.target.value,
        id: this.state.name.id,
      },
    });
  };

  clearOnClick = (string, property, key) => {
    if (this.state[property].text === string) {
      this.setState({
        [Object.keys(this.state)[key]]: {
          text: '',
          id: uniqid(),
        },
      });
    }
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        photo: URL.createObjectURL(img),
      });
    }
  };
  render() {
    const { name, title, email, phone, address, description, photo } =
      this.state;

    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>General Information</h2>

            <div className='col-1-col-2'>
              <div className='col-1'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  value={name.text}
                  onChange={(e) => {
                    this.handleChange(e, 0);
                  }}
                  onClick={() => {
                    this.clearOnClick('John Doe', 'name', 0);
                  }}
                  type='text'
                  id='fullName'
                />

                <label htmlFor='title'>Title</label>
                <input
                  value={title.text}
                  onChange={(e) => {
                    this.handleChange(e, 1);
                  }}
                  onClick={() => {
                    this.clearOnClick('UX Designer', 'title', 1);
                  }}
                  type='text'
                  id='title'
                />

                <label htmlFor='email'>Email</label>
                <input
                  value={email.text}
                  onChange={(e) => {
                    this.handleChange(e, 2);
                  }}
                  onClick={() => {
                    this.clearOnClick('johndoe@gmail.com', 'email', 2);
                  }}
                  type='text'
                  id='email'
                />

                <label htmlFor='phone'>Phone Number</label>
                <input
                  value={phone.text}
                  onChange={(e) => {
                    this.handleChange(e, 3);
                  }}
                  onClick={() => {
                    this.clearOnClick('217-412-7615', 'phone', 3);
                  }}
                  type='tel'
                  id='phone'
                />
              </div>

              <div className='col-2'>
                <label htmlFor='address'>Address</label>
                <input
                  value={address.text}
                  onChange={(e) => {
                    this.handleChange(e, 4);
                  }}
                  onClick={() => {
                    this.clearOnClick(
                      '3426 Isaacs Creek Road, IL',
                      'address',
                      4
                    );
                  }}
                  type='text'
                  id='address'
                />

                <label htmlFor='email'>Description</label>
                <textarea
                  value={description.text}
                  onChange={(e) => {
                    this.handleChange(e, 5);
                  }}
                  onClick={() => {
                    this.clearOnClick(
                      'I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations.',
                      'description',
                      5
                    );
                  }}
                  name='description'
                  id='description'
                  cols='30'
                  rows='6'
                ></textarea>

                <label htmlFor='photo' className='photo-upload'>
                  <FaUpload />
                  <p>Upload Photo</p>
                </label>
                <input
                  onChange={this.onImageChange}
                  type='file'
                  id='photo'
                  alt='photo'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='preview'>
          <GeneralPreview
            photo={photo}
            fullName={name.text}
            title={title.text}
            email={email.text}
            phone={phone.text}
            address={address.text}
            description={description.text}
          />
        </div>
      </div>
    );
  }
}
