import React from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"

const Photo = ({photo, onDeletePhoto, onClosePicture}) => {

  return (
    <ImageBackground source={{uri:photo}} style={styles.imagePreview}>
      <View style={styles.actionButtons}>
        <Icon name="delete" size={50} color={'#fff'}
          onPress={() => onDeletePhoto(null)}
        />
        <Icon name="check" size={50} color={'#fff'}
          onPress={onClosePicture}
        />
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  actionButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 5
  },
  imagePreview: {
    width: "100%",
    height: "100%",
  },
})

export default Photo;