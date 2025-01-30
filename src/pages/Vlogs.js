// src/pages/Vlogs.js
import React from 'react';
import Card from '../components/Card';

const Vlogs = () => {
  const vlogs = [
    { title: 'Vlog 1', description: 'This is the first vlog.', imageUrl: '/path-to-image1.jpg' },
    { title: 'Vlog 2', description: 'This is the second vlog.', imageUrl: '/path-to-image2.jpg' },
    { title: 'Vlog 3', description: 'This is the third vlog.', imageUrl: '/path-to-image3.jpg' },
  ];

  return (
    <div className="vlogs">
      {vlogs.map((vlog, index) => (
        <Card 
          key={index}
          title={vlog.title}
          description={vlog.description}
          imageUrl={vlog.imageUrl}
        />
      ))}
    </div>
  );
};

export default Vlogs;
