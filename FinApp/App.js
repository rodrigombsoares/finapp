import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Intro from './components/Intro';

const database = 'This is dataFkingBase';

export default class App extends React.Component {
  render() {
    return (
      <Intro />
    );
  }
}