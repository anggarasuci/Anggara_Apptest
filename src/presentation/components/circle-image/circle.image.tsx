import React from 'react';
import {circleImageStyles as styles} from './circle.image.style';
import {Image, View} from 'react-native';

interface CircleImageViewProps {
  url: string;
}

const CircleImageView: React.FC<CircleImageViewProps> = ({url}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.circularImage}
        source={
          url.startsWith('http')
            ? {uri: url}
            : require('../../../assets/images/user.png')
        }
      />
    </View>
  );
};

export default CircleImageView;
