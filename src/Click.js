import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';

const Click = (props) => {
    return (
        <View>
            <Button onPress={() => props.onClick()} title="Click Me!" />
        </View>
    )
}
export default Click;