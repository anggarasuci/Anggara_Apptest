import {StyleSheet} from 'react-native';

export const contactStyle = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  spacer: {
    height: 8,
  },
  hSpacer: {
    width: 8,
  },

  fabContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  fab: {
    backgroundColor: '#007bff',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    color: 'white',
  },
  removeContainer: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  removeButton: {
    backgroundColor: 'red',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  removeText: {
    fontSize: 12,
    color: 'white',
  },
});
