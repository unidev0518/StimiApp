import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { GameMatchup as GameMatchupType, BettingMode } from '../types';
import { OddsButton } from './OddsButton';

interface GameMatchupProps {
  game: GameMatchupType;
  mode: BettingMode['mode'];
  onOddsPress?: (odds: any) => void;
}

export const GameMatchup: React.FC<GameMatchupProps> = ({
  game,
  mode,
  onOddsPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.matchupHeader}>
        <View style={styles.teamsContainer}>
          <View style={styles.teamRow}>
            <View style={styles.teamIcon} />
            <Text style={styles.teamName}>{game.awayTeam.name}</Text>
          </View>
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>@</Text>
          </View>
          <View style={styles.teamRow}>
            <View style={styles.teamIcon} />
            <Text style={styles.teamName}>{game.homeTeam.name}</Text>
          </View>
        </View>
        <View style={styles.gameInfo}>
          <Text style={styles.dateTime}>
            {game.date}, {game.time}
          </Text>
          <TouchableOpacity style={styles.moreWagersButton}>
            <Text style={styles.moreWagersText}>More Wagers</Text>
            <Ionicons 
              name="chevron-forward" 
              size={14} 
              color={Colors.buttonPrimary} 
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.oddsContainer}>
        <View style={styles.oddsHeader}>
          <Text style={styles.columnHeader}>SPREAD</Text>
          <Text style={styles.columnHeader}>MONEY</Text>
          <Text style={styles.columnHeader}>TOTAL</Text>
        </View>

        <View style={styles.oddsRow}>
          <View style={styles.oddsColumn}>
            <OddsButton
              odds={game.homeOdds}
              mode={mode}
              onPress={() => onOddsPress?.(game.homeOdds)}
              style={styles.oddsButton}
            />
            <OddsButton
              odds={game.awayOdds}
              mode={mode}
              onPress={() => onOddsPress?.(game.awayOdds)}
              style={styles.oddsButton}
            />
          </View>

          <View style={styles.oddsColumn}>
            <OddsButton
              odds={{ spread: game.moneyLine.home, odds: game.moneyLine.home }}
              mode={mode}
              onPress={() => onOddsPress?.(game.moneyLine.home)}
              style={styles.oddsButton}
            />
            <OddsButton
              odds={{ spread: game.moneyLine.away, odds: game.moneyLine.away }}
              mode={mode}
              onPress={() => onOddsPress?.(game.moneyLine.away)}
              style={styles.oddsButton}
            />
          </View>

          <View style={styles.oddsColumn}>
            <OddsButton
              odds={game.overUnder.over}
              mode={mode}
              onPress={() => onOddsPress?.(game.overUnder.over)}
              style={styles.oddsButton}
            />
            <OddsButton
              odds={game.overUnder.under}
              mode={mode}
              onPress={() => onOddsPress?.(game.overUnder.under)}
              style={styles.oddsButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
  },
  matchupHeader: {
    marginBottom: 16,
  },
  teamsContainer: {
    marginBottom: 8,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  teamIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.textSecondary,
    marginRight: 12,
  },
  teamName: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  vsContainer: {
    alignItems: 'center',
    marginVertical: 2,
  },
  vsText: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTime: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  moreWagersButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreWagersText: {
    color: Colors.buttonPrimary,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 4,
  },
  oddsContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 12,
  },
  oddsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  columnHeader: {
    color: Colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  oddsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  oddsColumn: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  oddsButton: {
    marginHorizontal: 4,
  },
});
