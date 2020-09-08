import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default class TestButton extends React.Component
{
    showMessage = () => 
    {
        console.log("Klik!");
    }

    render(){
        return(
        <TouchableOpacity style={styles.button} onPress={() => this.showMessage()}>
        <Text style={styles.buttonName}>
            Button
        </Text>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: '#3388FF',
            justifyContent: 'center',
            borderRadius: 5,
        },
        buttonName: {
            fontSize: 14,
            padding: 5,
            color: '#FFFFFF',
            textAlign: 'center',
        }
    }
)