import React, { Component } from "react";
import {  } from 'react-native';
import {  Footer, FooterTab, Button, Text } from 'native-base';
import { Font } from "expo";

class FooterApp extends Component {

    constructor(props: any) {
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
            <Footer>
              <FooterTab>
                <Button>
                  <Text>Apps</Text>
                </Button>
                <Button>
                  <Text>Camera</Text>
                </Button>
                <Button active>
                  <Text>Navigate</Text>
                </Button>
                <Button>
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
        );
    }

}

export default FooterApp;