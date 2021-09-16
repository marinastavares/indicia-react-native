import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, extendTheme } from 'native-base'

import useCachedResources from '_hooks/useCachedResources'
import useColorScheme from '_hooks/useColorScheme'
import Navigation from '_navigation'

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      200: '#EFD09A',
      400: '#DBA4C7',
    },
    white: 'white',
  },
  components: {
    Input: {
      baseStyle: {
        color: '#8D9DB1',
        borderColor: '#F8EDF9',
        placeholderColor: '#F8EDF9',
      },
    },
    Button: {
      baseStyle: {
        color: '#fff',
      },
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
})

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App
