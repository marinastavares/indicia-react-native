/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Select as SelectBase, FormControl } from 'native-base'
import { Controller } from 'react-hook-form'

const Select = ({ name, control, errorMessage, rules, placeholder, ...props }) => {
  if (!control) {
    return null
  }
  return (
    <FormControl isRequired isInvalid={!!errorMessage?.length}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <SelectBase
            variant="underlined"
            w="100%"
            mx={3}
            onValueChange={onChange}
            selectedValue={value}
            placeholder={placeholder}
            {...props}
          >
            <SelectBase.Item label="UX Research" value="ux" />
            <SelectBase.Item label="Web Development" value="web" />
            <SelectBase.Item label="Cross Platform Development" value="cross" />
            <SelectBase.Item label="UI Designing" value="ui" />
            <SelectBase.Item label="Backend Development" value="backend" />
          </SelectBase>
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

export default Select
