import * as React from 'react'

import { Text, TextProps } from './Themed'

const MonoText = (props: TextProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
}

export default MonoText
