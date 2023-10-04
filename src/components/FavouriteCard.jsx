import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/cartSlice';
import {removeFav} from '../redux/favouriteSlice';

const FavouriteCard = ({product}) => {
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
  const removeFromFav = id => {
    dispatch(removeFav(id));
    Snackbar.show({
      text: 'Removed from favourite',
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
      <View style={styles.prodInfo}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.actions}>
        <IconButton
          icon="cart"
          iconColor="#0BCE83"
          size={20}
          mode="contained-tonal"
          onPress={() => addToCart(product)}
        />
        <IconButton
          icon="heart-remove"
          size={20}
          mode="contained-tonal"
          iconColor="#F24E1E"
          onPress={() => removeFromFav(product.id)}
        />
      </View>
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  prodInfo: {
    flex: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#007AFF',
  },
  actions: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
