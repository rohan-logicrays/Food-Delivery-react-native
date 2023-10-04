/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/cartSlice';
import Snackbar from 'react-native-snackbar';
import {addFav} from '../redux/favouriteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const addToCart = item => {
    dispatch(addItem(item));
    Snackbar.show({
      text: 'Added to cart',
      duration: 2000,
      backgroundColor: '#B993D6',
      textColor: '#FFFFFF',
    });
  };

  const addToFavourite = item => {
    dispatch(addFav(item));
    Snackbar.show({
      text: 'Added to favourite',
      duration: 2000,
      backgroundColor: '#F24E1E',
      textColor: '#FFFFFF',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.name}>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={1}>
            {product.name}
          </Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>
            {product.price} <Text style={styles.priceTag}> ₹/piece</Text>
          </Text>
        </View>
        <View style={styles.action}>
          <View>
            {/* <Button
              onPress={() => addToFavourite(product)}
              icon="heart"
              mode="elevated"
              buttonColor="#FFFFFF"
              rippleColor="#E2CBFF"
              style={styles.like}
              contentStyle={{marginLeft: 14, width: 100}}
            /> */}
            <IconButton
              icon="heart"
              mode="contained-tonal"
              size={30}
              iconColor="#F24E1E"
              onPress={() => addToFavourite(product)}
            />
          </View>
          <View>
            {/* <Button
              onPress={() => addToCart(product)}
              icon="cart"
              mode="elevated"
              buttonColor="#0BCE83"
              textColor="#FFFFFF"
              style={styles.cart}
              contentStyle={{marginLeft: 14, width: 100}}
            /> */}
            <IconButton
              icon="cart"
              mode="contained-tonal"
              size={30}
              iconColor="#0BCE83"
              onPress={() => addToCart(product)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    // width: ,
    height: 160,
    justifyContent: 'space-between',
    margin: 2,
  },
  imageContainer: {
    // marginRight: 10,
  },
  image: {
    width: 177,
    height: 128,
    borderRadius: 10,
  },
  cardInfo: {
    justifyContent: 'space-around',
    height: 128,
  },
  name: {
    marginBottom: 5,
    width: 177,
  },
  nameText: {
    fontSize: 22,
    color: '#2D0C57',
    fontWeight: '500',
  },

  price: {
    marginBottom: 5,
  },
  priceText: {
    fontSize: 22,
    color: '#2D0C57',
    fontWeight: '500',
  },
  priceTag: {
    fontWeight: '300',
    fontSize: 18,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    width: 180,
  },
  like: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 78,
    height: 35,
  },
  cart: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 78,
    height: 35,
  },
});
