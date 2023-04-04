import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from '../constants/styles';
import React from 'react';
import {memo} from 'react';
import {useState} from 'react';
import {userRequest} from '../redux/requestMethod';
import {useEffect} from 'react';
import axios from 'axios';
import {COLORS} from '../constants/theme';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const FeedDetails = ({data}) => {
  return (
    <RectButton style={styles.top_container}>
      <Image
        source={require('../assets/planet1.jpg')}
        resizeMode="cover"
        style={styles.top_img}
      />
      <Text style={styles.top_title}>{data?.name}</Text>
    </RectButton>
  );
};
memo(FeedDetails);

const Feed = () => {
  const navigation = useNavigation();
  const [planets, setPlanets] = useState({});
  const [planetsResult, setPlanetsResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlanet = async () => {
    setIsLoading(true);
    try {
      const res = await userRequest.get('/planets');
      setPlanets(res.data);
      setPlanetsResult(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchMorePlanet = async () => {
    setIsLoading(true);
    if (planets?.next) {
      try {
        const res = await axios.get(planets?.next);
        setPlanetsResult([...planetsResult, ...res.data.results]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchPlanet();
    }
    return () => {
      unsubscribed = true;
    };
  }, []);

  const renderItem = ({item}) => <FeedDetails data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={planetsResult?.slice(0, 1)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        style={styles.data_cont}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchMorePlanet}
        onEndReachedThreshold={0.5}
        windowSize={12}
        maxToRenderPerBatch={8}
        initialNumToRender={10}
        refreshing={false}
        onRefresh={fetchPlanet}
        ListFooterComponent={() => (
          <View>
            <View style={styles.parent_cont}>
              {planetsResult?.map((item, index) => (
                <RectButton
                  onPress={() =>
                    navigation.navigate('FeedDetail', {item: item})
                  }
                  style={styles.item_cont}
                  key={index}>
                  <Image
                    source={require('../assets/planet1.jpg')}
                    style={styles.item_img}
                  />
                  <View style={styles.item_det_view}>
                    <Text style={styles.det_name}>{item.name}</Text>
                    <Text style={styles.det_det}>terrain: {item.terrain}</Text>
                  </View>
                </RectButton>
              ))}
              {isLoading && (
                <ActivityIndicator
                  size={'large'}
                  color={COLORS.light.secondary}
                />
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
