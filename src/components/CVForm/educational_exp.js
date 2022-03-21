import React, { Component } from 'react';

export default class Educational extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>Educational Experience</h2>

            <div className='col-1-col-2 edu'>
              <div className='col-1'>
                <label htmlFor='university'>University Name</label>
                <input type='text' id='university' />

                <label htmlFor='programme'>Programme</label>
                <input type='text' id='programme' />

                <label htmlFor='from'>From</label>
                <input type='text' id='from' />
              </div>

              <div className='col-2'>
                <label htmlFor='degree'>Degree</label>
                <input type='text' id='degree' />

                <label htmlFor='years'>Years</label>
                <input type='number' id='years' />

                <label htmlFor='to'>To</label>
                <input type='text' id='to' />
              </div>
            </div>
          </div>
          <div className='edu-buttons'>
            <button>Add</button>
            <button>Delete</button>
          </div>
        </div>
        <div className='preview'>
          <h3>hello</h3>
        </div>
      </div>
    );
  }
}
