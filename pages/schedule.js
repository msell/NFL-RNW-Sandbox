import WeekPicker from '../components/WeekPicker'
import { View } from 'react-native-web'
import Games from '../components/Games'

const Schedule = () => {
  return (
    <View>
      <WeekPicker />
      <Games />
    </View>
  )
}

export default Schedule
