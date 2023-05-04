import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

type Props = {
  navigation: any;
  route: any;
};

export const Image = ({navigation, route}: Props) => {
  const image = route.params.img;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="contain"
        style={styles.image}>
        <Text style={styles.text}>date: </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
