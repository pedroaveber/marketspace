import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { Loading } from '@components/loading'
import { theme } from 'src/theme'

import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla'

import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent style="dark" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
