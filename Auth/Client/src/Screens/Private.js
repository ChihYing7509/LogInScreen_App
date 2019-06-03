import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import startAuth from './startAuthScreen'
import AsyncStorage from '@react-native-community/async-storage';
import colors from '../config/colors';

class PrivateScreen extends Component {

    handleLogOut = () => {
        AsyncStorage.removeItem('x-auth')
            .then(() => {
                return startAuth();
            })
            .catch(() => {
                return startAuth();
            });
    };
    render () {
        return (
            
            <View style={styles.container}>
                <View style={styles.messageView}>
                  <Text style={styles.message}>Hello! {this.props.username}</Text>
                  <Text style={styles.message}>Welcome to </Text>
                  <Text style={styles.message}> Irvine Company!</Text>
                </View>
                
                    <TouchableOpacity
                        style={styles.buttonContainer} 
                        onPress={this.handleLogOut}>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.RED,
        justifyContent: 'space-around',
    },
    buttonContainer: {
        height: '8%',
        width: '90%',
        backgroundColor: colors.ORANGE,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.WHITE,
        borderWidth: 1,
    },
    buttonText: {
        fontSize:34,
        color: colors.WHITE,
    },
    messageView: {
        alignItems: 'center',
        marginTop: '20%',
    },
    message: {
        color: colors.WHITE,
        fontSize: 36,
    }
})

export default PrivateScreen;