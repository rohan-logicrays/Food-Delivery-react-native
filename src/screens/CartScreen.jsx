import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartCard from '../components/CartCard';
import {resetCart} from '../redux/cartSlice';
import Snackbar from 'react-native-snackbar';

const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleCheckout = () => {
    dispatch(resetCart());
    Snackbar.show({
      text: 'Your order has been placed',
      duration: 2000,
      backgroundColor: '#FFD25F',
      textColor: '#FFFFFF',
    });
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id?.toString()} // Convert id to a string
            renderItem={({item}) => <CartCard product={item} />}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Price:</Text>
            <Text style={styles.totalAmount}>₹ {total.toFixed(2)}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button
              title="Checkout"
              color="#0BCE83"
              style={styles.btn}
              onPress={() => handleCheckout()}
            />
          </View>
        </>
      ) : (
        <Text style={styles.addMsg}>Add Something to the Cart</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
  addMsg: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    width: 190,
  },
  btnContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default CartScreen;
