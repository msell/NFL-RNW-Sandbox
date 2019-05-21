import gql from 'graphql-tag'

export const CURRENT_WEEK = gql`
  {
    currentWeek {
      number
    }
  }
`

export default CURRENT_WEEK
