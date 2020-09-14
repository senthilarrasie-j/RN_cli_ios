import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={true}
          style={{flexGrow: 1, backgroundColor: '#fff'}}
          contentContainerStyle={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}>
          <View
            style={{
              backgroundColor: 'transparent',
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 17, color: 'black', marginBottom: 10}}>
              react-native-element
            </Text>
            <Button
              style={{marginTop: 30}}
              icon={<Icon name="arrow-right" size={15} color="white" />}
              title="Button with icon"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
