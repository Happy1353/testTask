import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

type Props = {
  route: any;
};

export const Image = ({route}: Props) => {
  const image = route.params.img;
  const reduxValue = useSelector((state: any) => state.date);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="contain"
        style={styles.image}>
        <Text style={styles.text}>date: {reduxValue.date}</Text>
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
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
