import React from 'react';

const ConstructorDetailsContent = ({ constructor }) => {
  const { name, nationality, url } = constructor;

  return (
    <>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Name: </span>{name}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Nationality : </span>{nationality}</p>
      <p style={{ marginLeft: '5px', color: 'white' }}><span>Website: </span><a href={url}>{url}</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <div style={{ width: '500px', height: '500px', border: '1px solid black', padding: '10px' }}>

        </div>
      </div>
    </>
  );
};

export default ConstructorDetailsContent;