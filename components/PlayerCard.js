import React, { useState } from 'react'
import { View, Text } from 'react-native-web'

const PlayerCard = () => {
  const [players, setPlayers] = useState(['bob'])

  return (
    <View>
      {players.map(p => (
        <Text>{p}</Text>
      ))}
    </View>
  )
}

export default PlayerCard
