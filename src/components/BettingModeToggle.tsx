import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Colors } from '../constants/colors';
import { BettingMode } from '../types';

interface BettingModeToggleProps {
  mode: BettingMode['mode'];
  onModeChange: (mode: BettingMode['mode']) => void;
}

export const BettingModeToggle: React.FC<BettingModeToggleProps> = ({
  mode,
  onModeChange,
}) => {
  const animatedValue = React.useRef(new Animated.Value(mode === 'cash' ? 0 : 1)).current;

  React.useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: mode === 'cash' ? 0 : 1,
      useNativeDriver: false,
      tension: 100,
      friction: 8,
    }).start();
  }, [mode, animatedValue]);

  const handleToggle = () => {
    const newMode = mode === 'cash' ? 'coin' : 'cash';
    onModeChange(newMode);
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 42],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Betting Mode</Text>
      <TouchableOpacity
        style={styles.toggleContainer}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        <View style={styles.toggleTrack}>
          <Animated.View
            style={[
              styles.toggleThumb,
              {
                transform: [{ translateX }],
                backgroundColor: mode === 'cash' ? Colors.cashMode : Colors.coinMode,
              },
            ]}
          />
          <View style={styles.labelsContainer}>
            <Text style={[styles.toggleLabel, mode === 'cash' && styles.activeLabel]}>
              Cash
            </Text>
            <Text style={[styles.toggleLabel, mode === 'coin' && styles.activeLabel]}>
              Coin
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  toggleContainer: {
    alignSelf: 'flex-start',
  },
  toggleTrack: {
    width: 80,
    height: 32,
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    position: 'relative',
    justifyContent: 'center',
  },
  toggleThumb: {
    position: 'absolute',
    width: 36,
    height: 28,
    borderRadius: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: '100%',
  },
  toggleLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  activeLabel: {
    color: Colors.background,
  },
});
