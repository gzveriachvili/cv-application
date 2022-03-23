import React from 'react';

const EducationalExtra = (props) => {
  const {
    extra,
    addMore,
    deleteInput,
    uniChange,
    programmeChange,
    fromChange,
    degreeChange,
    cityChange,
    toChange,
    onInputClick,
  } = props;
  let i = 0;
  return (
    <div>
      {extra.map((task) => {
        return (
          <div id={i++}>
            <div className='col-1-col-2 edu'>
              <div className='col-1'>
                <label htmlFor='university'>University Name</label>
                <input
                  key={task.university.id}
                  value={task.university.text}
                  onChange={uniChange}
                  onClick={onInputClick}
                  type='text'
                  id='university'
                />

                <label htmlFor='programme'>Programme</label>
                <input
                  key={task.programme.id}
                  value={task.programme.text}
                  onChange={programmeChange}
                  onClick={onInputClick}
                  type='text'
                  id='programme'
                />

                <label htmlFor='from'>From</label>
                <input
                  key={task.from.id}
                  value={task.from.text}
                  onChange={fromChange}
                  onClick={onInputClick}
                  type='text'
                  id='from'
                />
              </div>

              <div className='col-2'>
                <label htmlFor='degree'>Degree</label>
                <input
                  key={task.degree.id}
                  value={task.degree.text}
                  onChange={degreeChange}
                  onClick={onInputClick}
                  type='text'
                  id='degree'
                />

                <label htmlFor='city'>City</label>
                <input
                  key={task.city.id}
                  value={task.city.text}
                  onChange={cityChange}
                  onClick={onInputClick}
                  type='text'
                  id='city'
                />

                <label htmlFor='to'>To</label>
                <input
                  key={task.to.id}
                  value={task.to.text}
                  onChange={toChange}
                  onClick={onInputClick}
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
