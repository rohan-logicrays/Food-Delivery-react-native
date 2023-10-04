import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {NavigationContext} from '@react-navigation/native';
import SearchBox from '../components/SearchBox';
import ChipComponent from '../components/ChipComponent';
import {
  breadCombo,
  coffeeCombo,
  fruits,
  fruitsCombo,
  pastaCombo,
  sweetsCombo,
  vegetableCombos,
  vegetables,
} from '../constants';
import ProductCard from '../components/ProductCard';
import CustomLoader from '../components/CustomLoader';
import {Button, IconButton} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';

const SingleCategoryScreen = ({route}) => {
  const flatListRef = useRef(null);
  const navigation = useContext(NavigationContext);
  const {category} = route.params;
  const [chipData, setChipData] = useState();
  const [selectedChips, setSelectedChips] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    navigation?.setOptions({
      title: category,
      headerShown: true,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <IconButton
            onPress={() => {
              if (navigation) {
                navigation.navigate('Favourite');
              }
            }}
            icon="heart"
            iconColor="#FF5F00"
          />
          <IconButton
            onPress={() => {
              if (navigation) {
                navigation.navigate('Cart');
              }
            }}
            icon="cart"
            iconColor="#0BCE83"
          />
        </View>
      ),
    });
  }, [category, navigation]);

  useEffect(() => {
    switch (category) {
      case 'Vegetables':
        setChipData(vegetableCombos);
        setCategoryData(vegetables);
        break;
      case 'Fruits':
        setChipData(fruitsCombo);
        setCategoryData(fruits);
        break;
      case 'Bread':
        setChipData(breadCombo);
        break;
      case 'Sweets':
        setChipData(sweetsCombo);
        break;
      case 'Pasta':
        setChipData(pastaCombo);
        break;
      case 'Coffee':
        setChipData(coffeeCombo);
        break;
      default:
        break;
    }
  }, [category]);

  const filterProducts = () => {
    let filtered = categoryData;

    if (selectedChips.length > 0) {
      filtered = filtered.filter(product =>
        selectedChips.some(chip => {
          if (product.tags) {
            const lowerCaseTags = product.tags.map(tag => tag.toLowerCase());
            return lowerCaseTags.includes(chip.toLowerCase());
          }
          return false;
        }),
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query),
      );
    }

    return filtered;
  };

  if (!chipData) {
    return <CustomLoader />;
  }

  const filteredProducts = filterProducts();
  return (
    <View style={styles.container}>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View>
        <ScrollView
          contentContainerStyle={styles.chipContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {chipData?.map(item => {
            return (
              <ChipComponent
                key={item.id}
                chip={item}
                selectedChips={selectedChips}
                setSelectedChips={setSelectedChips}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.products}>
        <FlatList
          ref={flatListRef}
          numColumns={1}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductCard product={item} />}
          ListFooterComponent={
            <View style={{height: 350, marginBottom: 15}}>
              {/* <Button
                icon="arrow-up"
                mode="contained-tonal"
                onPress={() =>
                  flatListRef.current.scrollToIndex({
                    animated: true,
                    index: 0,
                  })
                }
              /> */}
            </View>
          }
        />
      </View>
    </View>
  );
};

export default SingleCategoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  chipContainer: {
    padding: 10,
    minWidth: 800,
    maxWidth: 850,
    display: 'flex',
    flexWrap: 'wrap',
  },
  products: {
    // backgroundColor: '#F6F5F5',
  },
});
