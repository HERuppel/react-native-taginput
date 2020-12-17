import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

import TagInput from './src/Components/TagInput'

var outArray = [] //Generic Array to help updating the items received into the state

class App extends Component {

    state = {
      item: '',
      itemsArray: [],
      deniedEntry: false //Boolean state to prevent blank entries
    }

    addItem = () => {
      outArray.push(this.state.item)

      this.setState({ itemsArray: outArray })
      this.setState({ item: '' })
    }

    updateArray = items => {
        outArray = items
        this.setState({ itemsArray: items })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: '#06BEB6', textAlign: 'center', paddingBottom: 50 }}>Tag Input</Text>
                <TextInput
                  underlineColorAndroid='#7A7A7A'
                  placeholder={this.state.deniedEntry ? 'You need to insert an item!' : 'Insert a tag...'}
                  placeholderTextColor={this.state.deniedEntry ? '#F00' : '#707070' }
                  style={this.state.deniedEntry ? [styles.input, styles.deniedColor] : styles.input}
                  value={this.state.item}
                  onChangeText={value => {
                    this.state.deniedEntry
                      ? this.setState({ deniedEntry: !this.state.deniedEntry })
                      : null
                    this.setState({ item: value })
                  }}
                />
                <View style={{ padding: 5 }}>
                  <Button 
                    title='Insert'
                    color='#06BEB6'
                    onPress={() => {
                      if (this.state.item != '') {
                        this.addItem()
                      } else {
                        this.setState({ deniedEntry: true })
                      }
                    }}
                  />
                </View>
                <TagInput
                    items={[...this.state.itemsArray]}
                    updateArray={this.updateArray}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    input: {
      paddingHorizontal: 5,
      paddingBottom: 5,
      justifyContent: 'center',
      fontSize: 20
  },
})


export default App