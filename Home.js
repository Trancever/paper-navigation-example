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
  Button,
  Portal,
  Dialog,
  Paragraph,
} from 'react-native-paper';
import { Navigation } from 'react-native-navigation';

type Props = {};

export default class Home extends Component<Props> {
  state = {
    visible: false,
  };

  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Button
            mode="contained"
            onPress={() => this.setState({ visible: true })}
          >
            Press me
          </Button>
          <Portal>
            <Dialog
              visible={this.state.visible}
              onDismiss={() => this.setState({ visible: false })}
            >
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    this.setState({ visible: false });
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'navigation.playground.Overview',
                      },
                    });
                  }}
                >
                  Navigate
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
