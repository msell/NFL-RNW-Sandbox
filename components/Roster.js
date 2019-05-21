import React from 'react'
import { StyleSheet, View, Text } from 'react-native-web'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

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
  },
  h1: {
    alignItems: 'center',
    fontSize: 24
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
    <View>
      <Text style={styles.h1}>{team}</Text>
      {data.roster.teamPlayers.map(x => (
        <Text key={x.nflId}>{x.displayName}</Text>
      ))}
    </View>
  )
}

export default Roster
