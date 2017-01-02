import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'

const App = () => (
  <Header headerText="Text" />
)

AppRegistry.registerComponent('albums', () => App)
