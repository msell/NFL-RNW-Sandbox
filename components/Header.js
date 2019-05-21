import { StyleSheet, View, Text } from 'react-native-web'
import theme from './Theme';
const Header = ({children}) => (
<View style={theme.canvas}>
  <Text style={theme.h1}>NFL RNW</Text>
  </View>)

export default Header;