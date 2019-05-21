import gql from 'graphql-tag'

export const GET_GAMES = gql`
  query games($week: Int!, $seasonType: SeasonType!) {
    scores(week: $week, seasonType: $seasonType) {
      odds {
        total
        homeSpread
        visitorSpread
      }
      gameSchedule {
        gameId
        homeTeamAbbr
        visitorTeamAbbr
        homeNickname
        visitorNickname
        gameDate
        gameTimeEastern
      }
      score {
        phase
        homeTeamScore {
          pointTotal
        }
        visitorTeamScore {
          pointTotal
        }
      }
    }
    standings {
      team {
        abbr
        cityState
      }
      standing {
        overallWins
        overallLosses
        overallTies
      }
    }
  }
`

export default GET_GAMES
