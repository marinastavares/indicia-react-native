import React, { useState, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Stack, Box, Image, Button } from 'native-base'
import { useForm, SubmitHandler } from 'react-hook-form'

import Logo from '_assets/images/logo.png'
import Input from '../components/Input'

// import { View } from '../components/Themed'

const USER_FIELDS = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  PASSWORD1: 'password1',
  PASSWORD2: 'password2',
}
const USER_FIELDS_LABELS = {
  [USER_FIELDS.FULL_NAME]: 'Nome completo',
  [USER_FIELDS.EMAIL]: 'Email',
  [USER_FIELDS.PASSWORD1]: 'Senha',
  [USER_FIELDS.PASSWORD2]: 'Repita a senha',
}
const USER_FIELDS_PATTERN = {
  [USER_FIELDS.FULL_NAME]: {
    message: 'Insira seu nome completo',
  },
  [USER_FIELDS.EMAIL]: {
    value: /\S+@\S+\.\S+/,
    message: 'Email não válido',
  },
  [USER_FIELDS.PASSWORD1]: {
    message: 'Insira uma senha',
  },
  [USER_FIELDS.PASSWORD2]: {
    message: 'Insira ',
  },
}

type Inputs = {
  fullName: string
  email: string
  password1: string
  password2: string
}

interface SignUpInterface {
  navigation: any
}

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

const SignUp = ({ navigation }: SignUpInterface) => {
  const [errorPassword, setError] = useState('')
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  // TODO: Add integration here

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (data.password1 !== data.password2) {
      setError('As senhas devem ser iguais')
    }
    // return navigation.replace('Home')
  }

  const renderErrorMessage = useCallback(
    field => {
      if (field === USER_FIELDS.PASSWORD1 || field === USER_FIELDS.PASSWORD2) {
        return errors?.[field]?.message || errorPassword
      }
      return errors?.[field]?.message
    },
    [errorPassword, errors]
  )

  return (
    <View style={styles.container}>
      <Stack space={3} alignItems="center" w="100%">
        <View style={styles.separator} />
        <Box bg="white" style={styles.content}>
          <Image alt="Logo da indicia" source={Logo} style={styles.image} />
          <Stack space={4} alignItems="center" w="100%">
            <Text style={styles.title}>Bem vindx ao Indicia</Text>
            {Object.values(USER_FIELDS).map(field => (
              <Input
                control={control}
                rules={{
                  required: true,
                  pattern: USER_FIELDS_PATTERN[field],
                }}
                name={field}
                errorMessage={renderErrorMessage(field)}
                placeholder={USER_FIELDS_LABELS[field]}
                key={field}
                type={field.includes('password') ? 'password' : 'text'}
              />
            ))}
            <Button w="100%" onPress={handleSubmit(onSubmit)}>
              <Text>Inscrever</Text>
            </Button>
            <Button w="100%" variant="link" onPress={() => navigation.replace('Root')}>
              Eu já tenho uma conta
            </Button>
          </Stack>
        </Box>
      </Stack>
    </View>
  )
}
export default SignUp
