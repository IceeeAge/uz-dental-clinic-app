import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function Questions() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#4630EB' : undefined}
        style={{ marginRight: 8 }}
      />
      <Text>High blood pressure</Text>
    </View>
  );
}
