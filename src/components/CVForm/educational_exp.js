import React, { Component } from 'react';
import uniqid from 'uniqid';
import EducationalPreview from '../CVPreview/educational_preview';
import EducationalExtra from '../Util/educational_extra';
import EducationalPreviewExtra from '../Util/educational_extra_preview';

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

      count: 1,

      task: {
        university: {
          text: 'University',
          id: uniqid(),
        },
        programme: {
          text: 'Programme',
          id: uniqid(),
        },
        from: {
          text: 'From',
          id: uniqid(),
        },
        degree: {
          text: 'Degree',
          id: uniqid(),
        },
        city: {
          text: 'City',
          id: uniqid(),
        },
        to: {
          text: 'To',
          id: uniqid(),
        },
        id: uniqid(),
        index: 0,
      },

      extra: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearOnClick = this.clearOnClick.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.deleteExtra = this.deleteExtra.bind(this);
  }

  handleChange = (e, key, property) => {
    this.setState({
      [Object.keys(this.state)[key]]: {
        text: e.target.value,
        id: this.state[property].id,
      },
    });
  };

  handleChangeExtra = (e, key, key2, property) => {
    let items = [...this.state.extra];
    let item = { ...items[key] };

    item[property].text = e.target.value;
    item[property].id = this.state.extra[key2][property].id;
    items[key2] = item;

    this.setState({ items });
  };

  deleteExtra = (e) => {
    e.preventDefault();
    //console.log(e.currentTarget.parentElement.parentElement.id);
    //let i = parseInt(e.target.parentElement.parentElement.parentElement.id);

    this.setState({ extra: this.state.extra.slice(1) });
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

  alertClick = (e) => {
    //alert(e.target.parentElement.parentElement.parentElement.id);

    this.setState({
      count: e.target.parentElement.parentElement.parentElement.id,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      task: {
        university: {
          text: 'University',
          id: uniqid(),
        },
        programme: {
          text: 'Programme',
          id: uniqid(),
        },
        from: {
          text: 'From',
          id: uniqid(),
        },
        degree: {
          text: 'Degree',
          id: uniqid(),
        },
        city: {
          text: 'City',
          id: uniqid(),
        },
        to: {
          text: 'To',
          id: uniqid(),
        },
        id: uniqid(),
        index: this.state.count,
      },
      extra: this.state.extra.concat(this.state.task),
    });

    console.log(this.state.extra);
    console.log(this.state.count);
  };

  render() {
    const { university, programme, degree, city, from, to, extra, count } =
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

          <div className='edu-buttons'>
            <button onClick={this.onSubmitTask} type='submit'>
              Add more
            </button>
          </div>
          <EducationalExtra
            extra={extra}
            i={0}
            onInputClick={(e) => {
              this.alertClick(e);
            }}
            uniChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'university');
            }}
            programmeChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'programme');
            }}
            fromChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'from');
            }}
            degreeChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'degree');
            }}
            cityChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'city');
            }}
            toChange={(e) => {
              this.handleChangeExtra(e, count, 0, 'to');
            }}
            addMore={this.onSubmitTask}
            deleteInput={(e) => {
              this.deleteExtra(e);
            }}
          />
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

          <EducationalPreviewExtra extra={extra} />
        </div>
      </div>
    );
  }
}
