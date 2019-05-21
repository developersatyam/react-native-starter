import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        props.list.map((item, id) => (
            <View style={styles.mainStyle} key={id}>
                <TouchableOpacity onPress={()=>props.del(id)}>
                    <Text style={styles.fontStyles}>{item}</Text>
                </TouchableOpacity>
            </View>
        ))
    )
}
export default ListItem;

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'green'
    },
    fontStyles: {
        backgroundColor:'white',
        fontSize: 30,
        margin: 10,
        padding:10,
        textAlign:'center'

    }
})
