import { StyleSheet, View } from 'react-native-web'
import Header from './Header';
import Theme from "./Theme"

const Layout = ({children}) => (
  <View style={Theme.canvas}>
   <Header />
   <View>{children}</View>
  </View>
  );

export default Layout;