import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Stack, Text, Image } from 'native-base'

import Map from '_assets/images/mapa.png'
import Megaphone from '_assets/images/megaphone.png'
import Notes from '_assets/images/sticky-note.png'
import Chat from '_assets/images/chat.png'
import Profile from '_assets/images/woman.png'
import { RootStackParamList } from '../utils/types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#DBA4C7',
    paddingTop: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 64,
    marginBottom: 32,
    fontFamily: 'capriola',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  image: {
    height: 64,
    width: 64,
  },
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 100,
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 140,
  },
  buttonTitle: {
    marginTop: 12,
    color: '#DBA4C7',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'capriola',
  },
  buttonProfile: {
    color: '#DBA4C7',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'capriola',
  },
  profileButton: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = ({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Ana!</Text>
      <Stack direction="row" space={3} mb={3} alignItems="center">
        <TouchableOpacity style={styles.button}>
          <Image alt="Logo do Mapa" source={Map} style={styles.image} />
          <Text style={styles.buttonTitle}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image alt="Logo do Megafone" source={Megaphone} style={styles.image} />
          <Text style={styles.buttonTitle}>Denúncia</Text>
        </TouchableOpacity>
      </Stack>
      <Stack direction="row" space={3} mb={3} alignItems="center">
        <TouchableOpacity style={styles.button}>
          <Image alt="Logo do Mapa" source={Notes} style={styles.image} />
          <Text style={styles.buttonTitle}>Mural de dicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image alt="Logo do Megafone" source={Chat} style={styles.image} />
          <Text style={styles.buttonTitle}>Apoio psicológico</Text>
        </TouchableOpacity>
      </Stack>
      <TouchableOpacity style={styles.profileButton}>
        <Image alt="Logo do Megafone" source={Profile} style={styles.profileImage} />
        <Text style={styles.buttonProfile}>Atualizar perfil</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
