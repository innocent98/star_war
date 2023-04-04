import {
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {} from 'react';
import {styles} from '../constants/styles';
import FocusedStatusBar from '../components/FocusedStatusBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {changeBoard} from '../redux/onBoardRedux';

const Home = () => {
  const dispatch = useDispatch();

  const handleOnBoard = () => {
    dispatch(changeBoard(true));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar />
      <View style={styles.home_bg}>
        <Image
          source={require('../assets/planet_bg.jpg')}
          resizeMode="cover"
          style={styles.home_bg_image}
        />
        <View style={styles.home_explore_cont}>
          <Text style={styles.home_explore_text}>Explore The Star Wars.</Text>
          <Text style={styles.home_explore_small_text}>
            With 360 Degree Interactive Tour
          </Text>
          <BorderlessButton style={styles.home_explore_btn} onPress={handleOnBoard}>
            <Icon
              name="arrow-forward-ios"
              size={20}
              color={COLORS.light.textSoft}
              style={styles.home_explore_icon}
            />
            <Icon
              name="arrow-forward-ios"
              size={20}
              color={COLORS.dark.textSoft}
              style={styles.home_explore_icon}
            />
            <Icon
              name="arrow-forward-ios"
              size={20}
              color={COLORS.light.backgroundSoft}
              style={styles.home_explore_icon}
            />
          </BorderlessButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
