import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

// custome compnent to show the individual list items.
export default function Item({id, title, selected, onSelect, imageURI}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[styles.item, {backgroundColor: selected ? 'blue' : 'silver'}]}>
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          alignItems: 'center',
        }}>
        <View style={{flex: 0.5}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Image source={{uri: imageURI}} style={{width: 40, height: 40}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});
