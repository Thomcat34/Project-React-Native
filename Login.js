import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class login extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#abb9b3'}}>
        <ImageBackground
          source={require('./motif.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.body}>
            <View style={styles.logo}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 186,
                  height: 238,
                  backgroundColor: '#abb9b3',
                  borderRadius: 300,
                  marginLeft: 110,
                  marginTop: 70,
                  position: "absolute",
                }}>
              </TouchableOpacity>
              <Image
                style={{
                  width: 200,
                  height: 320,
                  position: 'absolute',
                  marginLeft: 100,
                  marginTop: 40,
                }}
                source={require('./logo.png')}
              />
            </View>
            <View>
              <View>
                <TouchableHighlight style={styles.submit} underlayColor="#fff">
                  <Text style={[styles.submitText]}>Inscription</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.submit2} underlayColor="#fff">
                  <Text style={[styles.submitText1]}>Connexion</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  b1: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 28,
    width: 300,
  },
  placement: {
    width: 300,
    marginLeft: 28,
    marginBottom: 20,
    color: '#ffffff',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 400,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#abb9b3',
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
  },
  submit2: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  submitText1: {
    color: '#abb9b3',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
