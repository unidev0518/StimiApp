import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Colors } from '../constants/colors';

export const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Header Image */}
        <Image
          source={require('../../assets/header.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerImage: {
    width: '100%',
    height: 60,
  },
});
