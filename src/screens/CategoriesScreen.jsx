/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import {categoryData} from '../constants';
import SearchBox from '../components/SearchBox';
import {IconButton} from 'react-native-paper';

const CategoriesScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categoryData);

  useEffect(() => {
    navigation?.setOptions({
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
  }, [navigation]);
  useEffect(() => {
    const filterCategories = () => {
      const filtered = categoryData?.filter(category =>
        category.categoryName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredCategories(filtered);
    };
    filterCategories();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View>
        {/* <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Image source={SEARCH} style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchField}
              onChangeText={text => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>
        </View> */}
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <View style={styles.categoryCards}>
        {filteredCategories?.length > 0 ? (
          <FlatList
            nestedScrollEnabled={true}
            numColumns={2}
            data={filteredCategories}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.push('SingleCategory', {
                    category: item.categoryName,
                  })
                }>
                <CategoryCard category={item} />
              </Pressable>
            )}
          />
        ) : (
          <Text>No Category Found</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    color: '#2D0C57',
    marginBottom: 20,
    fontWeight: '700',
    marginTop: 20,
    marginStart: 10,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 27,
    padding: 8,
    backgroundColor: '#FFFFFF',
    width: 374,
    height: 48,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  searchField: {
    flex: 1,
    height: 35,
  },
  categoryCards: {
    flex: 3,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CategoriesScreen;
