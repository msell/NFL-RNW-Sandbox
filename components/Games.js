import { View, Text } from 'react-native-web'
import Game from './Game'
import { GET_GAMES } from '../queries/getGames'
import { useQuery } from '@apollo/react-hooks'
import find from 'lodash.find'

const formatRecord = standings => {
  const { overallWins, overallLosses, overallTies } = standings
  return `${overallWins}-${overallLosses}${
    overallTies > 0 ? `-${overallTies}` : ''
  }`
}

const Games = () => {
  const { data, error, loading } = useQuery(GET_GAMES, {
    variables: {
      week: 15,
      seasonType: 'REG'
    }
  })
  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    )
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )

  const { scores, standings } = data
  return (
    <View>
      {scores.map(s => {
        const homeStandings = find(
          standings,
          x => x.team.abbr === s.gameSchedule.homeTeamAbbr
        )
        const visitorStandings = find(
          standings,
          x => x.team.abbr === s.gameSchedule.visitorTeamAbbr
        )
        const homeRecord = formatRecord(homeStandings.standing)
        const visitorRecord = formatRecord(visitorStandings.standing)

        return (
          <Game
            key={s.gameSchedule.gameId}
            {...s}
            homeRecord={homeRecord}
            visitorRecord={visitorRecord}
          />
        )
      })}
    </View>
  )
}

export default Games
