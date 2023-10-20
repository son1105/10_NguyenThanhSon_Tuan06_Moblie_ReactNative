import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function home({ navigation}) {
  return (
    <View style={{justifyContent:'space-between', height: 80}}>
      <Button title='Screen Chat'
        onPress={() => {
            navigation.navigate('Chat')
        }}
      />
      <Button title='Screen Search'
        onPress={() => {
            navigation.navigate('Search')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})