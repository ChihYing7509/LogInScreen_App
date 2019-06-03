import { 
    TextInput,
    TextInputProps,
    StyleSheet, 
    Dimensions,
    View,
    Text
 } from 'react-native';
import React, { Component } from 'react';
import colors from '../config/colors';

const {width, height} = Dimensions.get('screen');


class Input extends Component {

    render() {
        const { error, style, ...otherProps } = this.props;
        return (
            <View>
                <TextInput 
                    style= {styles.textInput}
                    {...this.props}
                />
                <Text style={styles.errorText}>{error || ""}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: .9 * width,
        height: .08 * height,
        backgroundColor: colors.MISCHKA,
        borderRadius: 30,
        color: colors.SILVER,
        fontSize: 18,
        padding: 15,
    },
    errorText: {
        height: 20,
        color: colors.TORCH_RED,
        paddingLeft: 15,
    }
})

export default Input;