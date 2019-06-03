/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Image,
  KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Navigation } from 'react-native-navigation';
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";

import axios from 'axios';

import Input from "../Components/Input";
import CustomButton from "../Components/Button/CustomButton";
import TextButton from '../Components/TextButton/TextButton';
import startPrivate from './startPrivateScreen';

import Config from 'react-native-config'


export default class App extends Component {
    static naviagatorStyle = {
      navBarHidden: true,
    }
    state = {
      username: "",
      password: "",
    }

    handleUsernameChange = username => {
      this.setState({username: username});
    }
  
    handlePasswordChange = password => {
        this.setState({ password: password} );
    }

    handlePushScreen = () => {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'Client.CreateAnAccount',
          options: {
            topBar: {
              title: {
                text: 'Create An Account'
              }
            }
          }
        }
      });
    }

    handleLogin = () => {
      const { username, password } = this.state;
      if (username && password) {
        axios.post(`http:${Config.IP_Address}:3000/user/login`, {
            password,
            username,
        })
        .then((response) => {

          try {
            const token = response.headers['x-auth'];
            const username = response.data['username'];
            if (token) {
               AsyncStorage.setItem('x-auth', token)
                .then(() => {
                    startPrivate(username);
                })
                .catch(() => {
                  alert('error');
                })
            }
          } catch (error) {
            alert(error);
          }
        })
        .catch((err) => {
            alert('Wrong username or password!');
      });
      } else {
          alert('Username and password field are both required!')
      }
    };

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior='padding'>
        <Image source={imageLogo} 
                style={styles.logo}
          />
          <View style={styles.formContainer}>
            <Input 
              placeholder="Username"
              onChangeText={this.handleUsernameChange}
              value={this.state.username}
            />
            <Input 
              placeholder="Password" 
              secureTextEntry
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton text="Log In" onPress={this.handleLogin}/>
            <TextButton onPress={this.handlePushScreen} text="Sign Up"/>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      justifyContent: "space-between"
    },
    formContainer: {
      height : 150,
      justifyContent: 'space-around',
    },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    buttonContainer: {
      alignItems: 'center',
      height: 180,
      justifyContent: 'space-around',
    }
  });