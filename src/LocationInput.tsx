// LocationInput.tsx

import React, { useState } from 'react';

interface LocationInputProps {
  onSubmit: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onSubmit }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    onSubmit(location);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City location"
        value={location}
        onChange={(e) => setLocation(e.target.value) }
      />
      <button onClick={handleSubmit}>Get Weather</button>
    </div>
  );
};

export default LocationInput;
