import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

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
