import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { View, Text } from 'react-native-web'

const QUERY = gql`
  {
    roster(year: 2019, teamAbbr: DAL) {
      teamPlayers {
        displayName
        position
        yearsOfExperience
      }
    }
  }
`
const Roster = () => {
  const { data, loading, error, networkStatus } = useQuery(QUERY, {
    notifyOnNetworkStatusChange: true
  })
  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
        <Text>{error.statusCode}</Text>
        <Text>{networkStatus}</Text>
      </View>
    )
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )

  return <div>{data}</div>
}

export default Roster
