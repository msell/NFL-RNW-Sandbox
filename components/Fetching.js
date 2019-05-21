import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native-web'

const Fetching = () => (
  <View>
    <Text style={styles.fetching}>🏈 Fetching...</Text>
  </View>
)

const Error = () => (
  <View style={styles.container}>
    <Text style={styles.fetching}>Oh no! Something went wrong.</Text>
    <Image source="https://placekitten.com/600/600" style={styles.image} />
    <Text style={styles.fetching}>Please refresh and try again.</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  fetching: {
    fontSize: 30,
    // fontFamily: "Luckiest Guy",
    color: '#17cbc4',
    margin: 10,
    letterSpacing: 1
  },
  image: {
    height: 170,
    width: 170
  }
})

export { Fetching, Error }
