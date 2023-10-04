import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import VEG from '../assets/VEG-1.png';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {removeItem, updateQuantity} from '../redux/cartSlice';
import Snackbar from 'react-native-snackbar';

const CartCard = ({product}) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeItem(id));
    Snackbar.show({
      text: 'Deleted Succesfully',
      duration: 2000,
      backgroundColor: '#F24E1E',
      textColor: '#FFFFFF',
    });
  };
  const handleIncrement = id => {
    dispatch(updateQuantity({id, quantity: product.quantity + 1}));
  };

  const handleDecrement = id => {
    if (product.quantity > 1) {
      dispatch(updateQuantity({id, quantity: product.quantity - 1}));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product?.image || ''}} style={styles.image} />
      </View>
      <View style={styles.prodInfo}>
        <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>{product.price} ₹/piece</Text>
      </View>
      <View style={styles.action}>
        <View style={styles.update}>
          <IconButton
            icon="plus"
            size={20}
            color="#007AFF"
            mode="contained-tonal"
            iconColor="#2D0C57"
            onPress={() => handleIncrement(product.id)}
          />
          <Text style={styles.qty}>{product.quantity}</Text>
          <IconButton
            icon="minus"
            size={20}
            color="#007AFF"
            mode="contained-tonal"
            iconColor="#2D0C57"
            onPress={() => handleDecrement(product.id)}
          />
        </View>
        <View style={styles.delete}>
          <IconButton
            icon="delete"
            size={20}
            color="#F24E1E"
            mode="contained-tonal"
            iconColor="#F24E1E"
            onPress={() => handleDelete(product.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default CartCard;

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
    width: 130,
    color: '#2D0C57',
  },
  price: {
    fontSize: 14,
    color: '#2D0C57',
  },
  action: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  update: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qty: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  delete: {},
});
