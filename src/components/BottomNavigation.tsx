import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

interface BottomNavigationProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

interface TabItem {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const tabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'sports', label: 'Sports', icon: 'basketball' },
  { id: 'bets', label: 'My Bets', icon: 'receipt' },
  { id: 'live', label: 'Live Now', icon: 'play-circle' },
  { id: 'account', label: 'Account', icon: 'person' },
];

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = 'home',
  onTabPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tab}
              onPress={() => onTabPress?.(tab.id)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? Colors.buttonPrimary : Colors.textSecondary}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: isActive ? Colors.buttonPrimary : Colors.textSecondary },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  navigation: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 4,
  },
});
