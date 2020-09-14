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

import {Calendar} from 'react-native-calendars';

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
          <View
            style={{
              backgroundColor: 'transparent',
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 17, color: 'black', marginBottom: 10}}>
              react-native-calendars
            </Text>
            <Calendar
              // Initially visible month. Default = Date()
              current={'2020-14-09'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {
                console.log('selected day', day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {
                console.log('month changed', month);
              }}
              // Hide month navigation arrows. Default = false
              hideArrows={false}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
