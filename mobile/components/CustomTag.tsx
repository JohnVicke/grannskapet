import React from 'react';
import { ITagProps, Tag, Text } from 'native-base';
import { colors } from '../utils/theme';

interface CustomTagProps extends ITagProps {
  name?: string;
  color?: string;
  active?: boolean;
}

export const CustomTag: React.FC<CustomTagProps> = ({
  name,
  active,
  ...props
}) => {
  return (
    <Tag backgroundColor={active ? '#D7FFDB' : '#f8f8f8'} {...props}>
      <Text color="#000">{name}</Text>
    </Tag>
  );
};
