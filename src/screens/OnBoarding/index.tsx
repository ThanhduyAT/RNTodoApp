import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {RootStackParams} from '../../models/app';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Dots = ({selected}: any) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.btn} {...props}>
    <Text style={styles.textBtn}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.btn} {...props}>
    <Text style={styles.textBtn}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.btn} {...props}>
    <Text style={styles.textBtn}>Done</Text>
  </TouchableOpacity>
);

type Props = NativeStackScreenProps<RootStackParams, 'Onboarding'>;

const OnboardingScreen = ({navigation}: Props) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../assets/Android_robot.png')}
              style={styles.stretch}
            />
          ),
          title: 'Connect to Android',
          subtitle: '',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../../assets/33.png')}
              style={styles.stretch}
            />
          ),
          title: 'Connect to React Native',
          subtitle: '',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../../assets/22.png')}
              style={styles.stretch}
            />
          ),
          title: 'Connect to Firebase',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  btn: {
    marginHorizontal: 10,
  },
  textBtn: {
    fontSize: 16,
  },
});
