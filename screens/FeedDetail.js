import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from '../constants/styles';
import FocusedStatusBar from '../components/FocusedStatusBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants/theme';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {changeBoard} from '../redux/onBoardRedux';

const FeedDetail = ({route}) => {
  const {item} = route.params;
  //   console.log(item);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar />
      <View style={styles.home_bg}>
        <Image
          source={require('../assets/planet_bg.jpg')}
          resizeMode="cover"
          style={styles.home_bg_image}
        />
        <View style={styles.det_explore_cont}>
          <Text style={styles.home_explore_text}>{item.name}</Text>
          <Text style={[styles.home_explore_small_text, {textAlign: 'center'}]}>
            {item.terrain}
          </Text>
        </View>

        <View style={styles.det_det_cont}>
          <RectButton style={styles.item_det_btn}>
            <Text style={[styles.home_explore_small_text]}>Planet name</Text>
            <Text
              style={[
                styles.home_explore_small_text,
                {fontFamily: 'IBMPlexSans-Bold', fontSize: SIZES.font},
              ]}>
              {item.name}
            </Text>
          </RectButton>
          <RectButton style={styles.item_det_btn}>
            <Text style={[styles.home_explore_small_text]}>Population</Text>
            <Text
              style={[
                styles.home_explore_small_text,
                {fontFamily: 'IBMPlexSans-Bold', fontSize: SIZES.font},
              ]}>
              {item.population}
            </Text>
          </RectButton>
          <RectButton style={styles.item_det_btn}>
            <Text style={[styles.home_explore_small_text]}>Climate</Text>
            <Text
              style={[
                styles.home_explore_small_text,
                {fontFamily: 'IBMPlexSans-Bold', fontSize: SIZES.font},
              ]}>
              {item.climate}
            </Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedDetail;
