import {StyleSheet} from 'react-native';

export const circleImageStyles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  circularImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
