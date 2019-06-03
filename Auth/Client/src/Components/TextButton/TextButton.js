import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import colors from '../../config/colors';


class TextButton extends Component {
    state = {};
    render() {
        return (
            <TouchableOpacity {...this.props}>
                <Text style={styles.textButton}>{this.props.text}</Text>
            </TouchableOpacity>
        ); 
    }
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 18,
        color: colors.SILVER,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: colors.SILVER,
        marginBottom: '10%',
    }
});

export default TextButton;