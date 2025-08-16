import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { BettingMode } from '../types';
import { featuredGame, gameMatchups } from '../constants/mockData';

// Components
import { Header } from '../components/Header';
import { FeaturedCard } from '../components/FeaturedCard';
import { GameMatchup } from '../components/GameMatchup';
import { BottomNavigation } from '../components/BottomNavigation';
import { BettingModeToggle } from '../components/BettingModeToggle';

export const HomeScreen: React.FC = () => {
  const [bettingMode, setBettingMode] = useState<BettingMode['mode']>('cash');
  const [activeTab, setActiveTab] = useState<string>('popular');
  const [expandedSection, setExpandedSection] = useState<string>('game-lines');

  const handleOddsPress = (odds: any) => {
    console.log('Odds pressed:', odds);
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handleBottomNavPress = (tab: string) => {
    console.log('Bottom nav pressed:', tab);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Back button and NFL section */}
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>

          <View style={styles.nflSection}>
            <View style={styles.nflHeader}>
              <View style={styles.nflLogoContainer}>
                <Image
                  source={require('../../assets/nfl-logo.png')}
                  style={styles.nflLogo}
                  resizeMode="contain"
                />
              </View>
              <Ionicons name="chevron-down" size={16} color={Colors.textPrimary} />
            </View>
            <Text style={styles.gamesAvailable}>23 Games Available</Text>
          </View>
        </View>

        {/* Betting Mode Toggle */}
        <BettingModeToggle mode={bettingMode} onModeChange={setBettingMode} />

        {/* Featured Card */}
        <FeaturedCard
          game={featuredGame}
          onPress={() => console.log('Featured game pressed')}
        />

        {/* Tab Navigation */}
        <View style={styles.tabNavigation}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'popular' && styles.activeTab]}
            onPress={() => handleTabPress('popular')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'popular' && styles.activeTabText,
              ]}
            >
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'parlay' && styles.activeTab]}
            onPress={() => handleTabPress('parlay')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'parlay' && styles.activeTabText,
              ]}
            >
              Same Game Parlay
            </Text>
          </TouchableOpacity>
        </View>

        {/* Game Lines Section */}
        <View style={styles.gameLinesSection}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection('game-lines')}
          >
            <Text style={styles.sectionTitle}>Game Lines</Text>
            <Ionicons
              name={expandedSection === 'game-lines' ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={Colors.textPrimary}
            />
          </TouchableOpacity>

          {expandedSection === 'game-lines' && (
            <View style={styles.gamesContainer}>
              {gameMatchups.map((game) => (
                <GameMatchup
                  key={game.id}
                  game={game}
                  mode={bettingMode}
                  onOddsPress={handleOddsPress}
                />
              ))}
            </View>
          )}
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      <BottomNavigation
        activeTab="home"
        onTabPress={handleBottomNavPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  topSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  nflSection: {
    flex: 1,
  },
  nflHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  nflLogoContainer: {
    backgroundColor: Colors.cardBackground,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
    height: 32,
    justifyContent: 'center',
  },
  nflLogo: {
    width: 30,
    height: 24,
  },
  gamesAvailable: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  tabNavigation: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: Colors.buttonPrimary,
  },
  tabText: {
    color: Colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: Colors.buttonPrimary,
  },
  gameLinesSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  gamesContainer: {
    paddingTop: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});
