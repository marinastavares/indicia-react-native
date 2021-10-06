import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
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
    marginTop: 32,
    backgroundColor: 'white',
    padding: 12,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postTitle: {
    color: '#DBA4C7',
    fontSize: 16,
  },
  createdAt: {
    color: '#DBA4C7',
    fontSize: 14,
  },
  stack: {
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 300,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 32,
    width: 32,
  },
})

const post = {
  image:
    'https://image.api.playstation.com/vulcan/img/rnd/202010/2621/KvgbdmY6MvPdLaa3dyVNGOw1.png',
  post: 'Bom dia Flor do dia',
  liked: false,
}

const Post = ({ navigation }: StackScreenProps<RootStackParamList, 'Post'>) => {
  return (
    <View style={styles.container}>
      <Box style={styles.header}>
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} color="white" />}
          borderRadius="full"
          onPress={() => navigation.push('Dashboard')}
        />
        <Text style={styles.title}>Mural de dicas</Text>
      </Box>
      <Text style={styles.subTitle}>
        Veja dicas e informações compartilhadas por mulheres da nossa comunidade
      </Text>
      <Box style={styles.post} borderRadius="md">
        <Image
          source={{
            uri: post.image,
          }}
          alt="Alternate Text"
          size="xl"
          style={styles.image}
        />
        <Text style={styles.createdAt}>{new Date().toLocaleDateString()}</Text>
        <Text style={styles.postTitle}>{post.post}</Text>
        <Stack direction="row" alignItems="center">
          <IconButton
            icon={<AntDesign name={post?.liked ? 'heart' : 'hearto'} size={24} color="#DBA4C7" />}
            borderRadius="full"
          />
        </Stack>
      </Box>
    </View>
  )
}

export default Post
