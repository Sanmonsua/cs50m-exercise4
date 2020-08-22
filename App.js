import React from 'react';
import { StyleSheet, View, SectionList, Button, Text } from 'react-native';
import Row from './Row'
import Heading from './Heading'

const OBJ = {
  "foo" : 'abh',
  "bar" : ['ad', "hfd"],
}

export default class App extends React.Component {

  state = {
    obj: OBJ,
    showModifyForm : false,
  }

  toArray() {
    return (
      Object.keys(this.state.obj).map( (key) =>{
      return ({
          title: key,
          data : this.state.obj[key] instanceof Array ? this.state.obj[key] : [this.state.obj[key]],
        })
    }))
  }

  onShowModifyForm = () => {
    this.setState({
      showModifyForm : true,
    })
  }

  render() {
    console.log(this.toArray())
    if (this.state.showModifyForm) return <Text>Triggered</Text>
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.toArray()}
          renderItem={({ item }) => <Row title={item}/>}
          renderSectionHeader={({ section: { title } }) => (
            <Heading title={title} />
          )}
        />
        <Button title="Modify or Add" style={styles.button} onPress={this.onShowModifyForm}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button : {
    justifyContent : 'flex-end',
  }
});
