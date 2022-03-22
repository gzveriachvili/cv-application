import React, { Component } from 'react';
import uniqid from 'uniqid';
import EducationalPreview from '../CVPreview/educational_preview';
import EducationalExtra from '../Util/educational_extra';

export default class Educational extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      university: {
        text: 'University of Illinois',
        id: uniqid(),
      },
      programme: {
        text: 'Computer Science',
        id: uniqid(),
      },
      from: {
        text: '2010',
        id: uniqid(),
      },
      degree: {
        text: 'Bachelors',
        id: uniqid(),
      },
      city: {
        text: 'Chicago',
        id: uniqid(),
      },
      to: {
        text: '2014',
        id: uniqid(),
      },

      index: 0,
      count: 0,

      extra: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearOnClick = this.clearOnClick.bind(this);
  }

  handleChange = (e, key, property) => {
    this.setState({
      [Object.keys(this.state)[key]]: {
        text: e.target.value,
        id: this.state[property].id,
      },
    });
  };

  handleChangeExtra = (e, key, property) => {
    let items = [...this.state.extra];
    let item = { ...items[key] };

    item[property].text = e.target.value;
    item[property].id = this.state.extra[key][property].id;
    items[key] = item;

    this.setState({ items });
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

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      extra: this.state.extra.concat({
        university: {
          text: this.state.index,
          id: uniqid(),
        },
        programme: {
          text: '-',
          id: uniqid(),
        },
        from: {
          text: '-',
          id: uniqid(),
        },
        degree: {
          text: '-',
          id: uniqid(),
        },
        city: {
          text: '-',
          id: uniqid(),
        },
        to: {
          text: '-',
          id: uniqid(),
        },
        id: uniqid(),
      }),
    });

    console.log(this.state.extra);

    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    const { university, programme, degree, city, from, to, extra, index } =
      this.state;

    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>Educational Experience</h2>
          </div>
          <div className='col-1-col-2 edu'>
            <div className='col-1'>
              <label htmlFor='university'>University Name</label>
              <input
                value={university.text}
                onChange={(e) => {
                  this.handleChange(e, 0, 'university');
                }}
                onClick={() => {
                  this.clearOnClick('University of Illinois', 'university', 0);
                }}
                type='text'
                id='university'
              />

              <label htmlFor='programme'>Programme</label>
              <input
                value={programme.text}
                onChange={(e) => {
                  this.handleChange(e, 1, 'programme');
                }}
                onClick={() => {
                  this.clearOnClick('Computer Science', 'programme', 1);
                }}
                type='text'
                id='programme'
              />

              <label htmlFor='from'>From</label>
              <input
                value={from.text}
                onChange={(e) => {
                  this.handleChange(e, 2, 'from');
                }}
                onClick={() => {
                  this.clearOnClick('2010', 'from', 2);
                }}
                type='text'
                id='from'
              />
            </div>

            <div className='col-2'>
              <label htmlFor='degree'>Degree</label>
              <input
                value={degree.text}
                onChange={(e) => {
                  this.handleChange(e, 3, 'degree');
                }}
                onClick={() => {
                  this.clearOnClick('Bachelors', 'degree', 3);
                }}
                type='text'
                id='degree'
              />

              <label htmlFor='city'>City</label>
              <input
                value={city.text}
                onChange={(e) => {
                  this.handleChange(e, 4, 'city');
                }}
                onClick={() => {
                  this.clearOnClick('Chicago', 'city', 4);
                }}
                type='text'
                id='city'
              />

              <label htmlFor='to'>To</label>
              <input
                value={to.text}
                onChange={(e) => {
                  this.handleChange(e, 5, 'to');
                }}
                onClick={() => {
                  this.clearOnClick('2014', 'to', 5);
                }}
                type='text'
                id='to'
              />
            </div>
          </div>

          {/* <div className='edu-buttons'>
            <button onClick={this.onSubmitTask} type='submit'>
              Add more
            </button>
          </div>
          <EducationalExtra
            extra={extra}
            i={0}
            uniChange={(e) => {
              this.handleChangeExtra(e, 0, 'university');
            }}
            programmeChange={(e) => {
              this.handleChangeExtra(e, 0, 'programme');
            }}
            addMore={this.onSubmitTask}
          /> */}
        </div>

        <div className='preview'>
          <EducationalPreview
            university={university.text}
            city={city.text}
            from={from.text}
            to={to.text}
            programme={programme.text}
            degree={degree.text}
          />
        </div>
      </div>
    );
  }
}
