import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native-web'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import {theme} from "./Theme"
import PlayerCard from "./PlayerCard"

const ROSTER_QUERY = gql`
  query Roster {
    roster(year: 2019, teamAbbr: DAL) {
      teamPlayers {
        nflId
        displayName
        position
        yearsOfExperience
      }
    }
  }
`

const styles = StyleSheet.create({
  container: {    
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-around'
  }  
})

const Roster = ({ team }) => {
  const { data, loading, error, networkStatus } = useQuery(ROSTER_QUERY, {
    notifyOnNetworkStatusChange: true
  })

  const refetching = networkStatus === 4

  if (loading && !refetching) return <Text>Loading...</Text>
  if (error) return <Text>{`Error: ${error}`}</Text>

  return (
    <View style={{...theme.canvas, ...styles.container}}>
      <Text style={theme.h2}>{team}</Text>
    <View style={styles.container}>
      {data.roster.teamPlayers.map(x => (        
        <PlayerCard key={x.nflId} {...x} />
      ))}
    </View>
    </View>
  )
}

export default Roster
