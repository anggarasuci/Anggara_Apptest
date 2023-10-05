import {StyleSheet} from 'react-native';

export const inputStyle = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#e0e0e0',
    borderWidth: 1.5,
    marginBottom: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9E9E9E',
  },
  errorLabel: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'red',
  },
});
