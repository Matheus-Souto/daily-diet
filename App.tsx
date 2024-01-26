import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Statistics } from '@screens/Statistics';
import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import theme from 'src/theme';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle="dark-content" 
      backgroundColor="transparent" 
      translucent
      />
      { fontsLoaded ? <Statistics /> : <Text>Loading</Text> }
    </ThemeProvider>
     
  )
}