import React, { Component } from 'react';
import '../styles/Footer.css';
import { VscGithubAlt } from 'react-icons/vsc';

export default class Footer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer'>
        <footer>
          <h3>Made by Gia Zveriachvili</h3>
          <a
            href='https://github.com/gzveriachvili'
            target='_blank'
            rel='noopener noreferrer'
          >
            <VscGithubAlt />
          </a>
        </footer>
      </div>
    );
  }
}
