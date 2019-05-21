import { useState } from 'react'
import { Picker } from 'react-native-web'

const weeks = Array.from(Array(21).keys()).map(x => x + 1)

const WeekPicker = ({ initialValue = 1 }) => {
  const [selectedWeek, setSelectedWeek] = useState(initialValue)
  return (
    <Picker
      selectedValue={selectedWeek}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedWeek(itemValue)
      }}
    >
      {weeks.map(w => (
        <Picker.Item label={`Week ${w}`} key={w} value={w} />
      ))}
    </Picker>
  )
}

export default WeekPicker
