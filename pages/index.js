import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Roster from '../components/Roster'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})

export default props => (
  <View style={styles.container}>    
    <Roster team="DAL" />
  </View>
)
