import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import colors from '../../config/colors';


const {width, height} = Dimensions.get('screen');

class CustomButton extends Component {
    state = {};
    render() {
        return (
            <TouchableOpacity style={styles.container} {...this.props}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        width: .9 * width,
        height: .08 * height,
        backgroundColor: colors.RED,
        borderRadius: 30,
        color: colors.RED,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 24,
        color: colors.WHITE,
    }
});

export default CustomButton;