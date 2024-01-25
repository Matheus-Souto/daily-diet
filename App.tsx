import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Home } from '@screens/Home';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <View>
      <Home />
      { fontsLoaded ? <Home /> : <Text>Loading</Text> }
    </View>    
  )
}