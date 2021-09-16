import React from 'react'
import { Input as InputBase, FormControl } from 'native-base'
import { Controller } from 'react-hook-form'

interface InputInterface {
  name: string
  control: any
  errorMessage: string | undefined
  placeholder: string | undefined
  rules: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Input = ({ name, control, errorMessage, rules, placeholder, ...props }: InputInterface) => {
  if (!control) {
    return null
  }
  return (
    <FormControl isRequired isInvalid={!!errorMessage?.length}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputBase
            variant="underlined"
            w="100%"
            mx={3}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...props}
          />
        )}
        name={name}
        defaultValue=""
      />
      {errorMessage && (
        <FormControl.ErrorMessage
          _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginLeft: '4' }}
        >
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  )
}

export default Input
