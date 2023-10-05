import React, {ReactNode} from 'react';
import {cardStyles as styles} from './card.style';
import {TouchableOpacity} from 'react-native';

interface CardViewProps {
  children: ReactNode;
  onClick?: () => void;
}

const CardView: React.FC<CardViewProps> = ({children, onClick}) => {
  const handleOnPress = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleOnPress}
      style={styles.cardContainer}>
      {children}
    </TouchableOpacity>
  );
};

export default CardView;
