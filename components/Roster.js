import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native-web'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Theme from "./Theme"

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
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
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
    <View style={Theme.canvas}>
      <Text style={Theme.h2}>{team}</Text>
    <ScrollView>
      {data.roster.teamPlayers.map(x => (
        <Text style={Theme.text} key={x.nflId}>{x.displayName}</Text>
      ))}
    </ScrollView>
    </View>
  )
}

export default Roster
