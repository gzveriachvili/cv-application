import React from 'react';

const EducationalExtra = (props) => {
  const { extra, i, addMore, deleteInput, uniChange, programmeChange } = props;

  return (
    <div>
      {extra.map(() => {
        return (
          <div>
            <div className='col-1-col-2 edu'>
              <div className='col-1'>
                <label htmlFor='university'>University Name</label>
                <input
                  key={extra.id}
                  value={extra[i].university.text}
                  onChange={uniChange}
                  onClick={() => {
                    this.clearOnClick(
                      'University of Illinois',
                      'university',
                      0
                    );
                  }}
                  type='text'
                  id='university'
                />

                <label htmlFor='programme'>Programme</label>
                <input
                  value={extra[i].programme.text}
                  onChange={programmeChange}
                  onClick={() => {
                    this.clearOnClick('Computer Science', 'programme', 1);
                  }}
                  type='text'
                  id='programme'
                />

                <label htmlFor='from'>From</label>
                <input
                  value={extra[i].from.text}
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
                  value={extra[i].degree.text}
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
                  value={extra[i].city.text}
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
                  value={extra[i].to.text}
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
              <button onClick={deleteInput} type='submit'>
                Delete
              </button>
              <button onClick={addMore} type='submit'>
                Add more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationalExtra;
