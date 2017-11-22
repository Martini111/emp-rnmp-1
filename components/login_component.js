import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default class Login extends React.Component {
  _onPressButton() {
    alert("Login button has been clicked!");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <TextInput
          maxLength = {15}
          placeholder="Username"
          placeholderTextColor="#999999"
          style={styles.baseInput}
        />
        <TextInput
          maxLength = {25}
          placeholder="Password"
          placeholderTextColor="#999999"
          secureTextEntry={true}
          style={styles.baseInput}
        />
        <TouchableOpacity style={styles.baseButton} onPress={this._onPressButton}>
            <Text style={styles.baseButtonText}>
              LOGIN
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 40,
    marginBottom:40,
  },
  baseInput: {
    height: 50,
    width: 250,
    padding: 5,
    paddingLeft: 15,
    marginTop:20,
    borderColor: '#999999',
    borderWidth: 1,
    fontSize: 23,
    color: '#999999'
  },
  baseButton: {
    height: 65,
    width: 250,
    marginTop:20,
    paddingTop: 15,
    backgroundColor: "#A3C644"
  },
  baseButtonText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
    color: '#fff',
  }
});
