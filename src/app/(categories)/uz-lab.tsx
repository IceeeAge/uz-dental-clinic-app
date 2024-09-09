import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_UZLABS_DATA } from '@/GraphQL/Query'

export default function uzLab() {

  const {data}=useQuery(GET_UZLABS_DATA)
  console.log(data)
  return (
    <View>
      <Text>uzLab</Text>
    </View>
  )
}