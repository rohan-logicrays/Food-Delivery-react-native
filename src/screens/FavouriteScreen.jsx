import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavouriteCard from '../components/FavouriteCard';

const FavouriteScreen = () => {
  const favouriteProducts = useSelector(state => state.favourite);

  return (
    <View>
      {favouriteProducts.length > 0 ? (
        <FlatList
          data={favouriteProducts}
          keyExtractor={item => item.id}
          renderItem={({item}) => <FavouriteCard product={item} />}
        />
      ) : (
        <Text style={styles.addMsg}>Add Something To Favourite</Text>
      )}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  addMsg: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});
