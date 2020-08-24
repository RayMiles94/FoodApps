import React, { Component } from "react";
import { Text, ScrollView } from 'react-native';
import _ from 'underscore';
import { View } from "native-base";

export default class Main extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            tabs: ["1","2","3"]
        };
    }

    public render(): any {
        return (
            <View>
                { _.forEach( ["1","2","3"]  ,function (eachitem, index) {
                    return(
                        <Text key={index}>{ eachitem }</Text>
                    )
                }) }
            </View>

        );
    }


}