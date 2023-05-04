import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay';

import {Media} from '../../types';

type Props = {
  navigation: any;
};

export const Main = ({navigation}: Props) => {
  const [data, setData] = useState<Media[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getImage();
  }, []);

  // get data from backend with render
  const getImage = () => {
    axios
      .get('https://picsum.photos/v2/list', {params: {page: 0, limit: 10}})
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  };

  //get more data with scroll
  const getMoreData = () => {
    axios
      .get('https://picsum.photos/v2/list', {
        params: {page: page + 15, limit: 20},
      })
      .then(function (response) {
        setData((prevData: Media[]) => [...prevData, ...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setPage(page + 15);
      });
  };

  //navigate to next page
  const navigateNextPage = () => {
    navigation.navigate('Image');
  };

  return (
    <SafeAreaView>
      <Spinner visible={loading} textContent={'Loading...'} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable
            style={styles.container}
            onPress={() => navigateNextPage()}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.download_url,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Pressable>
        )}
        keyExtractor={(item, index) => String(index)}
        onEndReachedThreshold={0.9}
        onEndReached={() => {
          getMoreData();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
