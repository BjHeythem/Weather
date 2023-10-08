import React from 'react';
import WeatherIcon from './WeatherIcon';
import Location from './Location';

interface WeatherCardProps {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, current }) => (
  <div>
    <Location {...location} />
    <div>
      <WeatherIcon iconUrl={`http:${current.condition.icon}`} altText={current.condition.text} />
      <p>Temperature: {current.temp_c}°C / {current.temp_f}°F</p>
      <p>Condition: {current.condition.text}</p>
    </div>
  </div>
);

export default WeatherCard;
