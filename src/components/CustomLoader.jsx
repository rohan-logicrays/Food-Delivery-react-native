import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const CustomLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#2D0C57" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CustomLoader;
