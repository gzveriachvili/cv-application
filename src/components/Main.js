import React, { Component } from 'react';
import General from './CVForm/general_info';

export default class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <form>
          <General />
        </form>
      </div>
    );
  }
}
