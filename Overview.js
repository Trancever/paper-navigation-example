/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Provider,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
} from 'react-native-paper';

type Props = {};

export default class Overview extends Component<Props> {
  state = {
    visible: false,
  };

  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              source={{
                uri:
                  'https://cdn-images-1.medium.com/max/1600/1*7ucm2eGmeDRIRDY4cez-4w.jpeg',
              }}
            />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
