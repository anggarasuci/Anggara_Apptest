import React from 'react';
import {verticalTextStyle as styles} from './vertical.text.style';
import {Text, View} from 'react-native';

interface VerticalTextViewProps {
  label: string;
  value: string;
}

const VerticalTextView: React.FC<VerticalTextViewProps> = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default VerticalTextView;
