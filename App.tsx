/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right,
  Icon
} from 'native-base'

const App = () => {

  const [count, setCount] = useState(0);

  const debugFunc = () => {
    console.log('Debug');
    setCount(count + 1);
  }

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>ホーム</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Button primary onPress={debugFunc}>
          <Text>Debug</Text>
        </Button>
        <Text>{count}</Text>
      </Content>
    </Container>
  );
};

export default App;