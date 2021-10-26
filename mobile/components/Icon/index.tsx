import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from './config.json';

const FontelloIcon = createIconSetFromFontello(
  fontelloConfig,
  'fontello',
  'fontello.ttf'
);

interface CustomIconProps {
  name: string;
  size?: number;
  color?: string;
}
export const Icon: React.FC<CustomIconProps> = ({
  size = 20,
  name,
  color = '#000'
}) => {
  return <FontelloIcon name={name} size={size} color={color} />;
};
