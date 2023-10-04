import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SEARCH from '../assets/SEARCH.png';

const SearchBox = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInput}>
        <Image source={SEARCH} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchField}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
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
});
