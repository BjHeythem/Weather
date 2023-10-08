import React from 'react';

interface LocationProps {
  name: string;
  region: string;
  country: string;
}

const Location: React.FC<LocationProps> = ({ name, region, country }) => (
  <div>
    <h1>{name}</h1>
    <p>{region}</p>
    <p>{country}</p>
  </div>
);

export default Location;
