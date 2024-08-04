import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../Utils/Colors';

const { width } = Dimensions.get('window');

// Define a base margin for mobile view
const baseMargin = 16; // Fixed margin for mobile view
// Adjust margin for larger screens
const responsiveMargin = width > 600 ? width * 0.3 : baseMargin; // 10% margin for wider screens

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 16,
    textAlign: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 99,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
  InputContainer: {
    marginHorizontal: responsiveMargin, // Use responsive margin based on screen width
  },
  input: {
    height: 50,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  dateText: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  pickerContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    height: 50,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },
  picker: {
    height: 50,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  WebCalendarStyle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 50,
  },
});
