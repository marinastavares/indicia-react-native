/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import Post from '../screens/Post'
import Complain from '../screens/Complain'
import CreatePost from '../screens/CreatePost'
import Dashboard from '../screens/Dashboard'
import NotFoundScreen from '../screens/NotFoundScreen'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import { RootStackParamList } from '../utils/types'
import LinkingConfiguration from './LinkingConfiguration'

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Complain" component={Complain} />
      <Stack.Screen name="Root" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

export default Navigation
