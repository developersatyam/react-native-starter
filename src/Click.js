import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Click = (props) => {
    return (
        <View>
            <Button style={styles.buttonStyle} onPress={() => props.onClick()}
                title="Click To add the name" />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10
    }
})

export default Click;