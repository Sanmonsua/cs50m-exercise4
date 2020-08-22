import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>
            {props.title}
        </Text>
    </View>
)

const styles = StyleSheet.create({
  container : {
      width: '100%',
      
  },
  title:{
    fontWeight : "bold",
    fontSize : 32,
  }
})

export default Heading