import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native';
import Click from './src/Click';
import ListItem from './src/ListItem';

export default class App extends Component {
  state = {
    random: [],
    text: '',
    users: []
  }
  onButtonPress = () => {
    if (this.state.text) {
      this.setState(prevState => {
        return {
          users: [...prevState.users, this.state.text],
          text: ''
        }
      })
    }
  }

  onDelete = (m) => {
    const newArr = this.state.users.filter((item, id) => {
      return id !== m;
    })
    this.setState(() => {
      return {
        users: newArr,
        text: ''
      }
    })
  }

  render() {
    return (
      <View style={styles.mainStyle}>

        <Text style={styles.fontStyles}>{this.state.text || '#React_Native'}</Text>
        <ScrollView>
          <Image
            style={{ width: '100%', height: 200 }}
            source={require('./assets/pic.jpg')} />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
          <Click onClick={this.onButtonPress} />
          <ListItem list={this.state.users} del={this.onDelete} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {

  },
  fontStyles: {
    padding: 30,
    fontSize: 30
  },
  inputBox: {
    borderColor: '#7a42f4',
    borderWidth: 1,
    margin: 5
  }
})
