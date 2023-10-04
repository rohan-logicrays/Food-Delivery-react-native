import React, {useEffect} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BG from '../assets/BG.png';
import SplashIcon from '../assets/SPLASH_ICON.png';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.logoBg}>
          <Text style={styles.logoText}>R</Text>
        </View>
        <View style={styles.backDrop}>
          <View style={styles.backDropTop}>
            <Image source={SplashIcon} style={styles.splashIcon} />
            <Text style={styles.title}>Non-Contact Deliveries</Text>
            <Text style={styles.description}>
              When placing an order, select the option “Contactless delivery”
              and the courier will leave your order at the door.
            </Text>
            <View style={styles.orderNow}>
              <Button
                title="ORDER NOW"
                color={'#0BCE83'}
                onPress={() => navigation.navigate('Categories')}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Text>DISMISS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A259FF',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoBg: {
    backgroundColor: '#CDFFB6',
    // padding: ,
    width: 63,
    height: 63,
    borderRadius: 63 / 2,
    marginTop: 60,
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    color: '#8C33FF',
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    // fontStyle: 'italic',
    fontWeight: '600',
  },
  backDrop: {
    backgroundColor: '#F6F5F5',
    height: 450,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backDropTop: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 400,
  },
  splashIcon: {
    height: 104,
    width: 104,
  },
  title: {
    color: '#2D0C57',
    fontSize: 28,
    fontWeight: '800',
    width: 250,
    textAlign: 'center',
  },
  description: {
    color: '#9586A8',
    fontSize: 17,
    textAlign: 'center',
  },
  orderNow: {
    width: 350,
    borderRadius: 8,
  },
  dismiss: {
    color: '#9586A8',
  },
});
