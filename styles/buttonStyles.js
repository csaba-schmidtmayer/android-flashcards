import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    padding: 10,
    marginTop:20,
    marginBottom: 20,
    borderRadius: 2
  },
  enabledButton: {
    backgroundColor: '#00695c',
  },
  disabledButton: {
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  enabledButtonText: {
    color: '#fff'
  },
  disabledButtonText: {
    color: '#cfd8dc'
  }
});
