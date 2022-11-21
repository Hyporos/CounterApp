import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import { styles } from "../../styles/Styles";
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

export default function SettingsScreen({ navigation }) {

  const { colors } = useTheme();

  // ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>

      <View style={[styles.settingsCardContainer, { backgroundColor: colors.background }]}>

        <Text style={[styles.settingsHeaderText, { color: colors.basicText }]}>Game Settings</Text>

        <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 5 }]}></View>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <View>
              <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Notifications</Text>
              <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Adjust notification settings</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Warming up</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Tap the button 100 times</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Warming up</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Tap the button 100 times</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.settingsHeaderText, { color: colors.basicText, marginTop: 10 }]}>Data Settings</Text>

        <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 5 }]}></View>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Import Data</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Import your data from a .CSV</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Export data</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Export your data to a .CSV</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.settingsHeaderText, { color: colors.basicText, marginTop: 10 }]}>App Settings</Text>

        <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 5 }]}></View>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Rate Counter</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>If you are enjoying the app, please leave a rating!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Send Feedback</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>If you have suggestions or critism, send it over!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Change Log</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View a list of the most recent changes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>About Counter</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View information about the app and founder</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Privacy Policy</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View the Privacy Policy</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}