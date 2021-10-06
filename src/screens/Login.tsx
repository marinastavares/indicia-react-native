import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Stack, Button, Box, Image } from 'native-base'
import { useForm, SubmitHandler } from 'react-hook-form'

import Logo from '../assets/images/logo.png'
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
    justifyContent: 'center',
    backgroundColor: '#DBA4C7',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'capriola',
    color: '#2E384D',
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
    paddingTop: 84,
    width: '80%',
    borderRadius: 8,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: -60,
    left: 90,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 70,
    height: 128,
    width: 128,
  },
})

const Login = ({ navigation }: LoginInterface) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  // TODO: Add integration here
  const onSubmit: SubmitHandler<Inputs> = data => navigation.replace('Home')

  return (
    <View style={styles.container}>
      <Stack space={3} alignItems="center" w="100%">
        <View style={styles.separator} />
        <Box bg="white" style={styles.content}>
          <Image alt="Logo da indicia" source={Logo} style={styles.image} />
          <Stack space={6} alignItems="center" w="100%">
            <Text style={styles.title}>Bem vindx ao Indicia</Text>
            <Input
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email não válido',
                },
              }}
              placeholder="Email"
              name="email"
              errorMessage={errors?.email?.message}
            />
            <Input
              control={control}
              rules={{
                required: true,
                pattern: {
                  message: 'Insira a sua senha',
                },
              }}
              placeholder="Senha"
              name="password"
              type="password"
              errorMessage={errors?.password?.message}
            />
            <Button w="100%" onPress={handleSubmit(onSubmit)}>
              <Text>Entrar</Text>
            </Button>
            <Button w="100%" variant="link" onPress={() => navigation.replace('SignUp')}>
              Inscreva-se
            </Button>
          </Stack>
        </Box>
      </Stack>
    </View>
  )
}

export default Login
