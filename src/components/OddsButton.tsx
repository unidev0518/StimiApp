import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  View,
} from 'react-native';
import { Colors } from '../constants/colors';
import { BettingMode, OddsButton as OddsButtonType } from '../types';

interface OddsButtonProps {
  odds: OddsButtonType;
  mode: BettingMode['mode'];
  onPress?: () => void;
  style?: any;
}

export const OddsButton: React.FC<OddsButtonProps> = ({
  odds,
  mode,
  onPress,
  style,
}) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
      tension: 150,
      friction: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 150,
      friction: 4,
    }).start();
  };

  const textColor = mode === 'cash' ? Colors.cashMode : Colors.coinMode;

  return (
    <Animated.View style={[{ transform: [{ scale: scaleValue }] }, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <View style={styles.content}>
          <Text style={[styles.spread, { color: textColor }]}>
            {odds.spread}
          </Text>
          <Text style={[styles.odds, { color: textColor }]}>
            {odds.odds}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 65,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  content: {
    alignItems: 'center',
  },
  spread: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  odds: {
    fontSize: 12,
    fontWeight: '600',
  },
});
