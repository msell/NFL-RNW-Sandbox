import { StyleSheet } from 'react-native-web'

export const palette = {
  primary: "#222",
  primaryText: "#fff"
};

export const theme = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  h1: {  
    fontSize: 24,
    fontWeight: "bold",
    color: palette.primaryText
  },
  h2: {  
    fontSize: 18,
    fontWeight: "bold",
    color: palette.primaryText
  },
  text: {  
    fontSize: 12,    
    color: palette.primaryText
  },
  canvas: {
    backgroundColor: palette.primary,    
  }

})

export default theme;