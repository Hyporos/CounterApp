import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../styles/Styles";
import { useTheme } from '@react-navigation/native';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

export default function SettingsScreen({ navigation }) {

  const { colors } = useTheme();

  // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      
    </ScrollView>
  );
}