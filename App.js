import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Click from './src/Click';
import ListItem from './src/ListItem';

export default class App extends Component {
  state = {
    random: [12, 43]
  }
  onButtonPress = () => {
    var num = Math.floor(Math.random() * 100 + 1);
    this.setState(prevState => {
      return {
        random: [...prevState.random, num]
      }
    })
  }

  onDelete=(m)=>{
    const newArr=this.state.random.filter((item, id)=>{
      return id!==m;
    })
    this.setState(() => {
      return {
        random: newArr
      }
    })
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <ScrollView>
          <Text style={styles.fontStyles}>Satyam Singh App 101</Text>
          <Click onClick={this.onButtonPress}/>
          <ListItem list={this.state.random} del={this.onDelete}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: 'orange'
  },
  fontStyles: {
    padding:30,
    fontSize: 30
  }
})
