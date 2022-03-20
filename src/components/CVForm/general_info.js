import React, { Component } from 'react';
import GeneralPreview from '../CVPreview/general_preview';
import { FaUpload } from 'react-icons/fa';
import photo from '../../assets/photo.jpg';

export default class General extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      input: { name: 'John Doe', title: 'Web Developer' },
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearOnClick = this.clearOnClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      input: {
        name: e.target.value,
      },
    });
  };

  clearOnClick = (string) => {
    if (this.state.input.name === string) {
      this.setState({
        input: {
          name: '',
        },
      });
    }
  };

  render() {
    const { input } = this.state;

    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>General Information</h2>

            <div className='col-1-col-2'>
              <div className='col-1'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  value={input.name}
                  onClick={() => {
                    this.clearOnClick('John Doe');
                  }}
                  onChange={this.handleChange}
                  type='text'
                  id='fullName'
                />

                <label htmlFor='title'>Title</label>
                <input
                  value={input.title}
                  onChange={this.handleChangeT}
                  type='text'
                  id='title'
                />

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' />

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
                  rows='6'
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
            photo={photo}
            fullName={input.name}
            title={input.title}
            phone='50322258'
            email='johnadams@gmail.com'
            address='Berkley Street 12'
            description='In 1989, Žižek published his first English-language text, entitled The Sublime Object of Ideology. In this book, he departed from traditional Marxist theory to develop a more analyzed materialist conception of ideology that drew heavily on Lacanian psychoanalysis and Hegelian idealism.'
          />
        </div>
      </div>
    );
  }
}
