import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native';
import { styles } from "../../styles/Styles";
import { useTheme } from '@react-navigation/native';
import Modal from 'react-native-modal';
import * as MailComposer from 'expo-mail-composer';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

export default function SettingsScreen({ navigation }) {

  const { colors } = useTheme();

  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [logModalVisible, setLogModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  const [value, setValue] = useState('first');

  const [isAvailable, setIsAvailable] = useState(false);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }
    checkAvailability();
  }, []);

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: subject,
      body: body,
      recipients: ["brian@maleki.dev"]
    });
  };

  // ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>

      <View>
        <Modal
          animationIn="fadeInLeft"
          animationOut="fadeOutRight"
          isVisible={contactModalVisible}
          backdropOpacity={.5}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setContactModalVisible(false)}
          onBackButtonPress={() => setContactModalVisible(false)}
        >
          <View style={styles.modalMainView}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card, borderColor: colors.border, height: 350 }]}>
              <Text style={styles.modalHeaderText}>Contact Form</Text>
              <View style={[styles.modalDivider, { borderColor: colors.border }]}></View>

              <View style={{ marginHorizontal: 25, backgroundColor: colors.container, borderRadius: 5 }}>
                <TextInput
                  value={subject}
                  onChangeText={setSubject}
                  style={[styles.contactInput, { marginVertical: 5 }]}
                  cursorColor={colors.primary}
                  selectionColor={colors.primary}
                  placeholder="Subject"
                />
              </View>

              <View style={{ marginHorizontal: 25, backgroundColor: colors.container, borderRadius: 5, marginTop: 15 }}>
                <TextInput
                  value={body}
                  onChangeText={setBody}
                  style={[styles.contactInput, { marginVertical: 10 }]}
                  cursorColor={colors.primary}
                  placeholder="Body"
                  multiline={true}
                />
              </View>

              <View style={[styles.modalDivider, { borderColor: colors.border }]}></View>

              <View style={{ marginHorizontal: 25 }}>
                <Text style={styles.contactInfoText}>When submitting bug reports, please specify if using Android or iOS</Text>
              </View>

              {isAvailable ?
                <TouchableOpacity onPress={() => {
                  sendMail()
                  setContactModalVisible(false)
                  setSubject(undefined)
                  setBody(undefined)
                }}>
                  <View style={[styles.contactSubmit, { backgroundColor: colors.primary }]}>
                    <Ionicons name='mail' size={27.5} color={'#4d4d4d'} />
                  </View>
                </TouchableOpacity>
                :
                <View style={[styles.contactSubmit, { backgroundColor: colors.notification }]}>
                  <Text style={{ fontSize: 17.5 }}>Feature Unavailable</Text>
                </View>
              }
            </View>

          </View>
        </Modal>
      </View>

      <View>
        <Modal
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={logModalVisible}
          backdropOpacity={.5}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setLogModalVisible(false)}
          onBackButtonPress={() => setLogModalVisible(false)}
        >
          <View style={styles.modalMainView}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={styles.modalHeaderText}>Change Log</Text>
              <Text style={[styles.modalSubText, { marginTop: 20 }]}>v1.0.0</Text>
              <View style={[styles.modalDivider, { borderColor: colors.border }]}></View>
              <Text style={[styles.modalInfoText, { marginTop: 0 }]}>Official App Release!</Text>
            </View>

          </View>
        </Modal>
      </View>

      <View>
        <Modal
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={aboutModalVisible}
          backdropOpacity={.5}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setAboutModalVisible(false)}
          onBackButtonPress={() => setAboutModalVisible(false)}
        >
          <View style={styles.modalMainView}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={styles.modalHeaderText}>CounterApp</Text>
              <Text style={styles.modalSubText}>v1.0.0</Text>
              <View style={[styles.modalDivider, { borderColor: colors.border }]}></View>
              <Text style={styles.modalInfoText}>Developed by Brian Maleki</Text>
              <Text style={[styles.modalInfoText, { color: '#8486AF' }]} onPress={() => Linking.openURL('http://github.com/Hyporos')}>github.com/Hyporos</Text>
            </View>

          </View>
        </Modal>
      </View>

      <View>
        <Modal
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={privacyModalVisible}
          backdropOpacity={.5}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setPrivacyModalVisible(false)}
          onBackButtonPress={() => setPrivacyModalVisible(false)}
        >
          <View style={styles.modalMainView}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={styles.modalHeaderText}>Privacy Policy</Text>
              <View style={[styles.modalDivider, { borderColor: colors.border }]}></View>
              <Text style={styles.modalInfoText}>Placeholder</Text>
            </View>

          </View>
        </Modal>
      </View>

      { /* ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */}

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

        <TouchableOpacity onPress={() => Linking.openURL("https://play.google.com/store/apps/details?id=com.spotify.s4a")}>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Rate Counter</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>If you are enjoying the app, please leave a rating!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setContactModalVisible(true)}>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Contact Form</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>Contact the developer about various needs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLogModalVisible(true)}>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Change Log</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View a list of the most recent changes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAboutModalVisible(true)}>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>About Counter</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View information about the app and developer</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPrivacyModalVisible(true)}>
          <View style={[styles.settingsCard, { backgroundColor: colors.container }]}>
            <Text style={[styles.settingsCardTitle, { color: colors.basicText }]}>Privacy Policy</Text>
            <Text style={[styles.settingsCardSubTitle, { color: colors.basicSubText }]}>View the Privacy Policy</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}