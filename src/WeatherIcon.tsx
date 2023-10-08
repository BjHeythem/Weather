import React from 'react';

interface WeatherIconProps {
  iconUrl: string;
  altText: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconUrl, altText }) => (
  <img src={iconUrl} alt={altText} />
);

export default WeatherIcon;
