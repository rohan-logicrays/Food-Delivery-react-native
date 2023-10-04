import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoryCard = ({category}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: category.imageURL}} style={styles.image} />
      <Text style={styles.text}>{category.categoryName}</Text>
      <Text style={styles.qty}>({category.quantity})</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    border: 2,
    borderColor: 'black',
    borderRadius: 8,
    width: 150,
    height: 200,
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    elevation: 5, // Adjust the elevation value as needed for the desired shadow effect

    // Shadow properties for iOS
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 150,
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    color: '#2D0C57',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
  qty: {
    color: '#9586A8',
    marginLeft: 10,
  },
});
