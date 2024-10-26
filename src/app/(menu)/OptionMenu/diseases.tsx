import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';

export default function Diseases() {
  // State to track the selected options for each disease
  const [selectedOptions, setSelectedOptions] = useState({
    tuberculosis: null,
    Cough1: null,
    coughwithblood: null,
    BeenExpoed: null,
  });

  // Function to handle checkbox selection for each disease
  const handleOptionChange = (disease: string, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [disease]: option,
    }));
  };

  return (
    <View style={styles.dcontainer}>
      <View style={styles.dsubContainer}>
        <Text style={styles.headerText}>
          Do you have any of the following diseases or problems?
        </Text>
      </View>

      {/* Tuberculosis Question */}
      <Text style={styles.questionText}>TUBERCULOSIS</Text>
      <View style={styles.checkboxContainer}>
        {['yes', 'no', 'dk'].map((option) => (
          <View style={styles.option} key={option}>
            <Checkbox
              value={selectedOptions.tuberculosis === option}
              onValueChange={() => handleOptionChange('tuberculosis', option)}
              color={selectedOptions.tuberculosis === option ? '#4630EB' : undefined}
            />
            <Text style={styles.optionText}>{option === 'dk' ? "Don't Know (DK)" : option.toUpperCase()}</Text>
          </View>
        ))}
      </View>

      {/* Cough1 Question */}
      <Text style={styles.questionText}>Cough of more than 3 weeks duration</Text>
      <View style={styles.checkboxContainer}>
        {['yes', 'no', 'dk'].map((option) => (
          <View style={styles.option} key={option}>
            <Checkbox
              value={selectedOptions.Cough1 === option}
              onValueChange={() => handleOptionChange('Cough1', option)}
              color={selectedOptions.Cough1 === option ? '#4630EB' : undefined}
            />
            <Text style={styles.optionText}>{option === 'dk' ? "Don't Know (DK)" : option.toUpperCase()}</Text>
          </View>
        ))}
      </View>

      {/* Cough with blood Question */}
      <Text style={styles.questionText}>Cough with blood</Text>
      <View style={styles.checkboxContainer}>
        {['yes', 'no', 'dk'].map((option) => (
          <View style={styles.option} key={option}>
            <Checkbox
              value={selectedOptions.coughwithblood === option}
              onValueChange={() => handleOptionChange('coughwithblood', option)}
              color={selectedOptions.coughwithblood === option ? '#4630EB' : undefined}
            />
            <Text style={styles.optionText}>{option === 'dk' ? "Don't Know (DK)" : option.toUpperCase()}</Text>
          </View>
        ))}
      </View>

      {/* Been exposed to TB Question */}
      <Text style={styles.questionText}>Been exposed to anyone with Tuberculosis</Text>
      <View style={styles.checkboxContainer}>
        {['yes', 'no', 'dk'].map((option) => (
          <View style={styles.option} key={option}>
            <Checkbox
              value={selectedOptions.BeenExpoed === option}
              onValueChange={() => handleOptionChange('BeenExpoed', option)}
              color={selectedOptions.BeenExpoed === option ? '#4630EB' : undefined}
            />
            <Text style={styles.optionText}>{option === 'dk' ? "Don't Know (DK)" : option.toUpperCase()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dcontainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  dsubContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%', // Control the width of each checkbox
  },
  optionText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8, // Space between checkbox and text
  },
});
