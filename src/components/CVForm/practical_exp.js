import React, { Component } from 'react';
import uniqid from 'uniqid';
import PracticalPreview from '../CVPreview/practical_preview';

export default class Practical extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      position: {
        text: 'UX Designer',
        id: uniqid(),
      },
      company: {
        text: 'Dell Technologies',
        id: uniqid(),
      },
      from: {
        text: '2020',
        id: uniqid(),
      },
      level: {
        text: 'Junior',
        id: uniqid(),
      },
      city: {
        text: 'Chicago',
        id: uniqid(),
      },
      to: {
        text: 'Present',
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
    const { position, company, level, city, from, to } = this.state;

    return (
      <div className='wrapper'>
        <div className='live'>
          <div className='general-info'>
            <h2>Work Experience</h2>
          </div>
          <div className='col-1-col-2 edu'>
            <div className='col-1'>
              <label htmlFor='position'>Position</label>
              <input
                value={position.text}
                onChange={(e) => {
                  this.handleChange(e, 0, 'position');
                }}
                onClick={() => {
                  this.clearOnClick('UX Designer', 'position', 0);
                }}
                type='text'
                id='position'
              />

              <label htmlFor='company'>Company</label>
              <input
                value={company.text}
                onChange={(e) => {
                  this.handleChange(e, 1, 'company');
                }}
                onClick={() => {
                  this.clearOnClick('Dell Technologies', 'company', 1);
                }}
                type='text'
                id='company'
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
              <label htmlFor='level'>Level</label>
              <input
                value={level.text}
                onChange={(e) => {
                  this.handleChange(e, 3, 'level');
                }}
                onClick={() => {
                  this.clearOnClick('Junior', 'level', 3);
                }}
                type='text'
                id='level'
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
                  this.clearOnClick('2020', 'to', 5);
                }}
                type='text'
                id='to'
              />
            </div>
          </div>
        </div>

        <div className='preview'>
          <PracticalPreview
            university={position.text}
            city={city.text}
            from={from.text}
            to={to.text}
            programme={company.text}
            degree={level.text}
          />
        </div>
      </div>
    );
  }
}
