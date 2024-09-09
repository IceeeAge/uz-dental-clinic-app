import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_TIPSGUIDE_DATA } from '@/GraphQL/Query'

export default function tipsGuides() {



  const {data}=useQuery(GET_TIPSGUIDE_DATA)
  console.log(data)
  return (
    <View>
      <Text>tipsGuides</Text>
    </View>
  )
}