import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '1010089604187-b8ia95t0e216kc8avado6scadmf53kgh.apps.googleusercontent.com',
});

export default class GLogin extends Component {
  async onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  render() {
    return (
      <View>
        <Button
          title="Google Sign-In"
          onPress={() =>
            this.onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
      </View>
    );
  }
}
