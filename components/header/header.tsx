import React, { Component } from "react";
import { Header } from 'react-native-elements';

class HeaderApp extends Component {

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    public render(): any {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }

}

export default HeaderApp;