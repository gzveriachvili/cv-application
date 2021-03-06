import React, { Component } from 'react';
import General from './CVForm/general_info';
import Educational from './CVForm/educational_exp';
import Practical from './CVForm/practical_exp';

export default class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <form>
          <div className='main-wrapper'>
            <General />
            <Educational />
            <Practical />
          </div>
        </form>
      </div>
    );
  }
}
