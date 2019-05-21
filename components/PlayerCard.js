import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import {theme, palette} from './Theme'

const styles = StyleSheet.create({
  card: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: palette.primaryText,
    borderRadius: "2px",
    padding: "4px",    
    margin: "2px",
    width: "250px",
    height: "100px"
  }
})
const PlayerCard = ({displayName}) => {  
  return (
    <View style={styles.card}>      
        <Text style={theme.text}>{displayName}</Text>        
    </View>
  )
}

export default PlayerCard
