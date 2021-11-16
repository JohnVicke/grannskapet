import { Center, Text, Input, Stack, Tag, Flex } from 'native-base';
import * as React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from '../components/Layout';
import { CustomTag } from '../components/CustomTag';

export default function TabOneScreen({}: RootTabScreenProps<'TabOne'>) {
  return (
    <Layout>
      <SafeAreaView>
        <Center>
          <Text>Utforska</Text>
          <Stack space={4}>
            <Input
              w="100%"
              placeholder="Sök grupper"
              InputLeftElement={<EvilIcons name="search" size={24} />}
            />
            <Flex flexDirection="row">
              <CustomTag size="sm" name="hello" active={true} />
              <CustomTag size="sm" name="hello" active={false} />
            </Flex>
          </Stack>
        </Center>
      </SafeAreaView>
    </Layout>
  );
}
