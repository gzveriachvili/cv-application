import React, { Component } from 'react';
import '../styles/Header.css';
import { SiLaravel } from 'react-icons/si';

export default class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>
        <header>
          <div className='title'>
            <SiLaravel />
            <h1>CV Builder App</h1>
          </div>
        </header>
      </div>
    );
  }
}
