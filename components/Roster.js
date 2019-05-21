import React, { useState } from 'react'
import { View, Text } from 'react-native-web'

const Roster = ({ team }) => {
  const [players, setPlayers] = useState(['bob'])

  return <View>{<Text>{team}</Text>}</View>
}

export default Roster
