import React from 'react';
import { StyleSheet, View, SectionList, Button, Text } from 'react-native';
import Row from './Row'
import Heading from './Heading'
import ModifyObjectForm from './ModifyObjectForm'

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

  onCancelModifyForm = () => {
    this.setState({
      showModifyForm : false,
    })
  }

  onSaveModifyForm = (key, value) => {
    let parsed
    try {
      parsed = JSON.parse(value)
    } catch (err) {
      parsed = value
    }
    this.setState(prevState => ({
      showModifyForm : false,
      obj : {... prevState.obj, [key] : parsed}
    }))
  }

  render() {
    console.log(this.toArray())
    if (this.state.showModifyForm) {
      return <ModifyObjectForm 
        onCancel={this.onCancelModifyForm}
        onSave={this.onSaveModifyForm}
        />}
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.toArray()}
          renderItem={({ item }) => <Row title={item}/>}
          keyExtractor={(item, index) => item + index}
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
