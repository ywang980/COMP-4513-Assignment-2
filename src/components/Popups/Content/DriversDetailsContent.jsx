import React from 'react';

/**
 * Content to be displayed in the details pop-up of a driver.
 */
const DriversDetailsContent = ({ driver, ImageLink }) => {
  const { name, dob, age, nationality, url } = driver;

  return (
    <>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Name: </span>{name}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Date of Birth: </span>{dob}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Age: </span>{age}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Nationality : </span>{nationality}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Website: </span><a href={url}>{url}</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <div style={{ width: '500px', height: '500px', border: '1px solid black', padding: '10px' }}>
        <img src= {ImageLink} alt="Driver Image"></img>
        </div>
      </div>
    </>
  );
};

export default DriversDetailsContent;