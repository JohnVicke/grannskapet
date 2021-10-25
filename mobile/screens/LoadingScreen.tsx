import React from 'react';
import { Button } from '../components/Button';
import { View } from '../components/Themed';

interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <View>
      <Button>Logga in</Button>
      <Button variant="outlined">Logga in</Button>
    </View>
  );
};
