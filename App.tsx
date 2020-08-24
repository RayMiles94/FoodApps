import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main/main';
import    HeaderApp  from './components/header/header';
import FooterApp from './components/footer/footer';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class App  extends Component {

  constructor(props:any) {
    super(props);
    this.state = {};
  } 

  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }


  public render(): any {
    return (
      <View>
        <HeaderApp></HeaderApp>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Main></Main>
      </View>
    );
  }
  
}

