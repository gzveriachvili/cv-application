import React from 'react';

const EducationalPreviewExtra = (props) => {
  const { extra } = props;

  return (
    <div>
      {extra.map((task) => {
        return (
          <div className='preview-educational'>
            <div className='one-edu-entry extra-entry'>
              <div className='row-1 edu'>
                <div className='uni'>
                  <h4>{task.university.text},</h4>
                  <p>{task.city.text} |</p>
                  <p>{task.from.text} -</p>
                  <p>{task.to.text}</p>
                </div>
              </div>
              <div className='extra-info'>
                <div className='programme-degree'>
                  <h6>{task.programme.text},</h6>
                  <p>{task.degree.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationalPreviewExtra;
