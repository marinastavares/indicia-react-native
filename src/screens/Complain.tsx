import React, { useState, useCallback, useMemo } from 'react'
import { StyleSheet, View, Platform, Modal, Pressable, Alert } from 'react-native'
import { Text, Stack, Box, Button, Input as InputBase } from 'native-base'
import { useForm, SubmitHandler } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker'

import Input from '../components/Input'
import Select from '../components/Select'

// import { View } from '../components/Themed'

const COMPLAIN_FIELDS = {
  DATE: 'date',
  LOCAL: 'local',
  TYPE_OF_AGGRESSION: 'typeOfAggression',
  DESCRIPTION: 'description',
}
const COMPLAIN_FIELDS_LABELS = {
  [COMPLAIN_FIELDS.DATE]: 'Data do ocorrido',
  [COMPLAIN_FIELDS.LOCAL]: 'Local do ocorrido',
  [COMPLAIN_FIELDS.TYPE_OF_AGGRESSION]: 'Tipo de agressão',
  [COMPLAIN_FIELDS.DESCRIPTION]: 'Descrição do ocorrido',
}
const COMPLAIN_FIELDS_PATTERN = {
  [COMPLAIN_FIELDS.DATE]: {
    message: 'Insira uma data válida',
  },
  [COMPLAIN_FIELDS.LOCAL]: {
    message: 'Campo obrigatório',
  },
  [COMPLAIN_FIELDS.TYPE_OF_AGGRESSION]: {
    message: 'Campo obrigatório',
  },
}

type Inputs = {
  fullName: string
  date: string
  local: string
  typeOfAggression: string
  description: string
}

interface ComplainInterface {
  navigation: any
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 62,
    backgroundColor: '#DBA4C7',
  },
  title: {
    paddingTop: 12,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'capriola',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
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
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pressable: {
    width: '100%',
  },
})

const Complain = ({ navigation }: ComplainInterface) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>()
  const [date, setDate] = useState(new Date(Date.now()))
  const [modalVisible, setModalVisible] = useState(false)

  const showPicker = () => {
    setModalVisible(true)
  }

  const onChange = (event, value) => {
    setDate(value)
    setValue('date', value)
  }
  // TODO: Add integration here

  const onSubmit: SubmitHandler<Inputs> = data => {
    return navigation.replace('Home')
  }

  const renderErrorMessage = useCallback(field => errors?.[field]?.message, [errors])

  return (
    <View style={styles.container}>
      <Stack space={3} alignItems="center" w="100%">
        <View style={styles.separator} />
        <Text style={styles.title}>Denúncia</Text>
        <Text style={styles.subTitle}>
          Foi vítima de alguma violência? Relate aqui e ajude a alertar outras mulheres
        </Text>
        <Box bg="white" style={styles.content}>
          <Stack space={8} alignItems="center" w="100%">
            {Object.values(COMPLAIN_FIELDS).map(field => {
              if (field === COMPLAIN_FIELDS.DATE) {
                return (
                  <Pressable style={styles.pressable} onPress={showPicker}>
                    <View style={styles.pressable} pointerEvents="none">
                      <InputBase
                        placeholder="Selecione a data"
                        variant="underlined"
                        w="100%"
                        mx={3}
                        value={watch('date') ? watch('date').toLocaleDateString() : ''}
                      />
                    </View>
                  </Pressable>
                )
              }
              if (field === COMPLAIN_FIELDS.TYPE_OF_AGGRESSION) {
                return (
                  <Select
                    control={control}
                    rules={{
                      required: true,
                      pattern: COMPLAIN_FIELDS_PATTERN[field],
                    }}
                    name={field}
                    errorMessage={renderErrorMessage(field)}
                    placeholder={COMPLAIN_FIELDS_LABELS[field]}
                    key={field}
                  />
                )
              }
              return (
                <Input
                  control={control}
                  rules={{
                    required: true,
                    pattern: COMPLAIN_FIELDS_PATTERN[field],
                  }}
                  name={field}
                  errorMessage={renderErrorMessage(field)}
                  placeholder={COMPLAIN_FIELDS_LABELS[field]}
                  key={field}
                />
              )
            })}
            <Button w="100%" onPress={handleSubmit(onSubmit)}>
              <Text>Enviar</Text>
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour
              onChange={onChange}
              style={styles.datePicker}
            />
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <Text>Selecionar data</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default Complain
