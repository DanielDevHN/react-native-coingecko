import { View, Text } from 'react-native'
import React from 'react'

const CoinItem = ({coin}) => {
  return (
    <View>
      <Text>{coin.name}</Text>
    </View>
  )
}

export default CoinItem