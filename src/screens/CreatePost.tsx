import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Platform } from 'react-native'
import { Text, Stack, Button, Box } from 'native-base'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as ImagePicker from 'expo-image-picker'

import Input from '../components/Input'

type Inputs = {
  email: string
  password: string
}
interface LoginInterface {
  navigation: any
}

// aleta de cores:
// - #DBA4C7
// - #EFD09A

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
    fontFamily: 'capriola',
    marginBottom: 32,
  },
  selectButton: {
    borderColor: '#DBA4C7',
    color: '#DBA4C7',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#DBA4C7',
  },
  button: {
    color: 'white',
  },
  content: {
    padding: 16,
    width: '80%',
    borderRadius: 8,
    position: 'relative',
  },
  description: {
    // height: 200,
  },
})

const Login = ({ navigation }: LoginInterface) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>()
  // TODO: Add integration here
  const onSubmit: SubmitHandler<Inputs> = data => navigation.push('Home')
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setValue('image', result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mural de dicas</Text>
      <Stack space={3} alignItems="center" w="100%">
        <Box bg="white" style={styles.content}>
          <Stack space={6} alignItems="center" w="100%">
            <Input
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Descrição não válido',
                },
              }}
              placeholder="Conteúdo do post"
              name="post"
              errorMessage={errors?.email?.message}
              multiline
              style={styles.description}
            />
            <Button variant="outline" style={styles.selectButton} onPress={pickImage}>
              <Text style={styles.selectButton}> Selecionar imagem</Text>
            </Button>
            {watch('image') && (
              <Image source={{ uri: watch('image') }} style={{ width: 200, height: 200 }} />
            )}
            <Button w="100%" onPress={() => navigation.push('Home')}>
              <Text>Criar Post</Text>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </View>
  )
}

export default Login
