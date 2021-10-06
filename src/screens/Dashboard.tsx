import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Button, Text, Stack, Box, Image, IconButton, VStack } from 'native-base'
import { AntDesign, Ionicons } from '@expo/vector-icons'

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
    paddingTop: 12,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 64,
    marginBottom: 8,
    fontFamily: 'capriola',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    marginTop: 12,
    marginBottom: 12,
    borderColor: 'white',
  },
  post: {
    backgroundColor: 'white',
    padding: 12,
    width: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postTitle: {
    color: '#DBA4C7',
    fontSize: 14,
  },
  createdAt: {
    color: '#DBA4C7',
    fontSize: 10,
  },
  stack: {
    marginTop: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const POSTS_MOCK = [
  {
    image:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/2621/KvgbdmY6MvPdLaa3dyVNGOw1.png',
    post: 'Bom dia Flor do dia',
    liked: false,
  },
  {
    image: '',
    post: 'Post motivacional',
    liked: true,
  },
]

const Dashboard = ({ navigation }: StackScreenProps<RootStackParamList, 'Dashboard'>) => {
  return (
    <View style={styles.container}>
      <Box style={styles.header}>
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} color="white" />}
          borderRadius="full"
          onPress={() => navigation.push('Home')}
        />
        <Text style={styles.title}>Mural de dicas</Text>
      </Box>
      <Text style={styles.subTitle}>
        Veja dicas e informações compartilhadas por mulheres da nossa comunidade
      </Text>
      <Button onPress={() => navigation.push('CreatePost')} variant="outline" style={styles.button}>
        <Text>Criar um post</Text>
      </Button>
      <Stack style={styles.stack} space={8} direction="row">
        {POSTS_MOCK.map(post => (
          <Pressable onPress={() => navigation.push('Post')}>
            <Box style={styles.post} borderRadius="md">
              {post?.image ? (
                <Image
                  source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
              ) : (
                <Text style={styles.postTitle}>{post.post}</Text>
              )}
              <Stack direction="row" alignItems="center">
                <IconButton
                  icon={
                    <AntDesign name={post?.liked ? 'heart' : 'hearto'} size={24} color="#DBA4C7" />
                  }
                  borderRadius="full"
                />
                <Text style={styles.createdAt}>{new Date().toLocaleDateString()}</Text>
              </Stack>
            </Box>
          </Pressable>
        ))}
      </Stack>
    </View>
  )
}

export default Dashboard
