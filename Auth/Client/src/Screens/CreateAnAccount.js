import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView
} from 'react-native';
import validator from 'validator';
import { Navigation } from 'react-native-navigation';

import Input from '../Components/Input';
import CustomButton from '../Components/Button/CustomButton';

import axios from 'axios';
import colors from '../config/colors';
import strings from '../config/strings';
import Config from 'react-native-config';

export default class App extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        usernameTouched: false,
        emailTouched: false,
        passwordTouched: false,
        emailValid: false,
        passwordValid: false,
        confirmValid: false
    }


    handleEmailChange = email => { 
        //this.setState({ email: email});
        emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!emailValid) {
          this.setState({ email: email, emailValid: false });
          console.log("Email is Not Correct");
          return false;
        } else {
          console.log("Email is Correct");
          this.setState({ email: email, emailValid: true });
        }
    }
    
    handlePasswordChange = password => {
        //this.setState({ password: password} );
        passwordValid = password.length >= 6;
        if (!passwordValid) {
          this.setState({ password: password, passwordValid: false });
          console.log("password is Not Correct");
          return false;
        } else {
          console.log("password is Correct");
          this.setState({ password: password, passwordValid: true });
        }
    }

    handleUsrnameBlur = () => {
        this.setState({ usernameTouched: true });
    };

    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
      };
    
    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
      };

    handleUsernameChange = username => {
        this.setState({username: username});
    }

    handleRegister = () => {
        const { email, password, username } = this.state;
        if (validator.isEmail(email) && username.trim() && password.trim() && 
            emailValid && passwordValid) {
            axios.post(`http:${Config.IP_Address}:3000/user/register`, {
                email,
                password,
                username,
            })
            .then((response) => {
                if (response.status == 201) {
                    Navigation.pop(this.props.componentId);
                }
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    return alert("Email or username already exists.");
                }
                return alert(err);
            });
        } else {
            alert('Email, Username and Password are required!');
        }
    }

    render() {

        const {
            username,
            email,
            password,
            usernameTouched,
            emailTouched,
            passwordTouched,
            emailValid,
            passwordValid
          } = this.state;

          const usernameError = 
          !username && usernameTouched ?
          strings.USERNAME_REQUIRED : undefined;
 
         const emailError =
         (!email && emailTouched) ? strings.EMAIL_REQUIRED :
         (!emailValid && emailTouched) ? strings.EMAIL_VALID : undefined;

        const passwordError =
         (!password && passwordTouched) ? strings.PASSWORD_REQUIRED :
         (!passwordValid && passwordTouched) ? strings.PASSWORD_VALID : undefined;

        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'>
                <View style={styles.signupForm}>
                    
                    <Input 
                        placeholder="Email" 
                        onChangeText={this.handleEmailChange}
                        value={this.state.email}
                        keyboardType="email-address"
                        onBlur={this.handleEmailBlur}
                        error={emailError}
                    />
                    <Input 
                        placeholder="Username"
                        onChangeText={this.handleUsernameChange}
                        value={this.state.username}
                        onBlur={this.handleUsrnameBlur}
                        error={usernameError}
                    />
                    <Input 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={this.handlePasswordChange}
                        value={this.state.password}
                        onBlur={this.handlePasswordBlur}
                        error={passwordError} 
                    />
                    <CustomButton 
                        text="Sign Up" 
                        onPress={this.handleRegister}
                        />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    signupForm: {
        height: 350,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    message: {
        color: colors.RED,
        fontSize: 36,
    }
});