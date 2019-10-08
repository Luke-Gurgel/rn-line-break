import React from 'react'
import { Text } from 'react-native'
export default ({ lines = 1 }) => <Text>{ '\n'.repeat(lines) }</Text>
