import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Row = (props) =>(
    <View style={styles.container}>
        <Text style={styles.title}>
            {props.title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width : "100%",
        borderWidth : 1,
        
    },
    title: {
        fontSize : 20,
    }
})

export default Row