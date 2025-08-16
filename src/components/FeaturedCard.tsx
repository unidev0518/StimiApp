import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { FeaturedGame } from '../types';

interface FeaturedCardProps {
  game: FeaturedGame;
  onPress?: () => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  game,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.peopleBadge}>
              <Ionicons name="people" size={16} color={Colors.textPrimary} />
              <Text style={styles.peopleText}>
                {game.peoplePlaced} People Placed
              </Text>
            </View>
          </View>

          <View style={styles.teamsContainer}>
            <View style={styles.teamRow}>
              <View style={styles.teamIcon} />
              <Text style={styles.teamName}>{game.teams[0]}</Text>
            </View>
            <View style={styles.vsContainer}>
              <Text style={styles.vsText}>@</Text>
            </View>
            <View style={styles.teamRow}>
              <View style={styles.teamIcon} />
              <Text style={styles.teamName}>{game.teams[1]}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.dateTime}>
              {game.date} • {game.time}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradient: {
    padding: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  peopleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  peopleText: {
    color: Colors.textPrimary,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
  teamsContainer: {
    marginBottom: 16,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 12,
  },
  teamName: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  vsContainer: {
    alignItems: 'center',
    marginVertical: 4,
  },
  vsText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
  },
  footer: {
    alignItems: 'flex-end',
  },
  dateTime: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.9,
  },
});
