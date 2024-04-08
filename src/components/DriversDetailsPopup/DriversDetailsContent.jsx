import React from 'react';

const DriversDetailsContent = ({ Name,dob,age,nationality, url }) => {
 

  return (
    <>
      <p style={{ marginLeft: '5px' }}><span>Name: </span>{Name}</p>
      <p style={{ marginLeft: '5px' }}><span>Date of Birth: </span>{dob}</p>
      <p style={{ marginLeft: '5px' }}><span>Age: </span>{age}</p>
      <p style={{ marginLeft: '5px' }}><span>Nationality : </span>{nationality}</p>
      <p style={{ marginLeft: '5px' }}><span>Website: </span><a href={url}>{url}</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <div style={{ width: '500px', height: '500px', border: '1px solid black', padding: '10px' }}>
       
        </div>
      </div>
    </>
  );
};

export default DriversDetailsContent;