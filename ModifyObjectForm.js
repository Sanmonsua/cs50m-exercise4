import React from 'react'
import {StyleSheet, TextInput, View, Button} from 'react-native'

export default class ModifyObjectForm extends React.Component { 
    state = {
        isValid : false,
        key : '',
        value : '',
    }

    validateForm = () => {
        if (this.state.key.length > 0 && this.state.value.length > 0){
            this.setState({
                isValid : true,
            })
        } else {
            this.setState({
                isValid : false,
            })
        }
    }

    async onChangeKey(text){
        await this.setState({
            key : text,
        })
        this.validateForm()
    }

    async onChangeValue(text){
        await this.setState({
            value : text,
        })
        this.validateForm()
    }

    onSaveHandler = () => {
        console.log('hello')
        this.props.onSave(this.state.key, this.state.value)
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputs}
                    placeholder="Key"
                    value={this.state.key}
                    onChangeText={text => this.onChangeKey(text)}
                />
                <TextInput 
                    style={styles.inputs}
                    placeholder="Value (Use [ ] for arrays)" 
                    value={this.state.value}
                    onChangeText={text => this.onChangeValue(text)}
                />
                <View style={styles.buttonGroup}>
                    <Button 
                        title="Save" 
                        style={styles.button}
                        disabled={!this.state.isValid}
                        onPress={this.onSaveHandler}
                    />
                    <Button 
                        title="Cancel"
                        style={styles.button}
                        onPress={this.props.onCancel}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        alignItems : 'center', 
        justifyContent : 'center',
    },
    inputs : {
        margin : 15,
        padding : 7,
        borderWidth : 2,
        width : '80%',
        borderRadius : 5,
    },
    buttonGroup : {
        flexDirection : 'row',
        justifyContent : "space-around",
        width : '50%',
    },
    button : {
        margin : 20,
        width : 40,
    }

})