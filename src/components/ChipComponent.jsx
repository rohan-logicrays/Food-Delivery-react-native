import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Chip} from 'react-native-paper';

const ChipComponent = ({chip, selectedChips, setSelectedChips}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handlePress = name => {
    setIsChecked(prev => !prev);
    let chips = [...selectedChips];
    if (isChecked) {
      const index = chips.indexOf(name);
      if (index !== -1) {
        chips.splice(index, 1);
      }
    } else {
      chips.push(name);
    }
    setSelectedChips(chips);
  };

  return (
    <View style={styles.container}>
      <Chip
        selected={isChecked}
        // mode={isChecked ? 'outlined' : 'flat'}
        showSelectedOverlay={isChecked}
        onPress={() => handlePress(chip.name)}
        style={styles.chip}
        compact>
        {chip.name} ({chip.quantity})
      </Chip>
    </View>
  );
};

export default ChipComponent;

const styles = StyleSheet.create({
  chip: {
    display: 'inline-block',
    height: 34,
    color: '#000000',
    borderRadius: 16,
    margin: 5,
    alignItems: 'center',
  },
  container: {
    width: 'auto',
    height: 'auto',
    // justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});
