import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, extendTheme } from 'native-base'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'

const theme = extendTheme({
  colors: {
    primary: {
      50: '#feebf7',
      100: '#ebc7de',
      200: '#dba4c7',
      300: '#cb80b0',
      400: '#bc5c99',
      500: '#a2437f',
      600: '#7f3464',
      700: '#5b2447',
      800: '#38152c',
      900: '#170411',
    },
    secondary: {
      50: '#fff5e1',
      100: '#f6e0ba',
      200: '#eecc91',
      300: '#e7b766',
      400: '#dfa33c',
      500: '#c58923',
      600: '#9a6b1a',
      700: '#6e4c11',
      800: '#432e07',
      900: '#1a0e00',
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
