import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ClinicianItems from '@/components/CategoryDetails/ClinicianItems'

export default function clinicians() {
  return (
    <View style={styles.container}>
     <ClinicianItems/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});