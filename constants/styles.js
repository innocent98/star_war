import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from './theme';
import ScreenSizes from './utils/ScreenSizes';

const {width, height} = ScreenSizes;
const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  home_bg: {width: width, height: height, position: 'relative'},
  home_bg_image: {
    height: itemHeight,
    width: itemWidth,
  },
  home_explore_cont: {position: 'absolute', bottom: 20, padding: 15},
  home_explore_text: {
    color: COLORS.light.backgroundSoft,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 40,
  },
  home_explore_small_text: {
    color: COLORS.light.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.small,
  },
  home_explore_btn: {flexDirection: 'row', marginTop: 30},
  home_explore_icon: {marginRight: -5},

  // feed
  container: {
    backgroundColor: COLORS.light.background,
    height: height,
    width: width,
    // alignItems:'center',
    // justifyContent:'center'
  },

  top_container: {
    height: itemHeight * 0.5,
    borderBottomLeftRadius: 80,
    backgroundColor: COLORS.light.white,
    borderBottomLeftRadius: 60,
  },
  top_img: {height: '100%', width: itemWidth, borderBottomLeftRadius: 60},
  top_title: {
    color: COLORS.light.backgroundSoft,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.xxl,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  parent_cont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light.white,
    borderTopRightRadius: 60,
    paddingTop: 20,
    ...SHADOWS.dark,
    // height: itemHeight,
  },
  item_cont: {
    backgroundColor: COLORS.light.background,
    ...SHADOWS.dark,
    width: itemWidth * 0.4,
    height: itemHeight * 0.3,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  item_img: {
    width: itemWidth * 0.26,
    height: itemHeight * 0.15,
    borderRadius: 50,
    position: 'absolute',
    right: -5,
    top: -10,
    zIndex: 9,
  },
  data_cont: {
    backgroundColor: COLORS.light.backgroundSoft,
    borderTopRightRadius: 50,
    paddingTop: 0,
  },
  item_det_view: {position: 'absolute', bottom: 20, left: 10},
  det_name: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.dark.backgroundSoft,
  },
  det_det: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.font},

  // planet detail
  det_explore_cont: {position: 'absolute', top: 40, padding: 15},
  det_det_cont: {position: 'absolute', bottom: 40, padding: 15},
  item_det_btn: {
    backgroundColor: '#0B1949',
    borderRadius: 30,
    width: itemWidth * 0.9,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  // form
  input: {
    borderColor: COLORS.dark.textSoft,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  submit_btn: {padding: 10},
  form_container: {
    backgroundColor: COLORS.light.background,
    height: itemHeight,
    width: width,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  submit_btn: {
    marginTop: 8,
    paddingHorizontal: 10,
    backgroundColor: COLORS.light.gray,
    borderRadius: 4,
    height: itemHeight * 0.08,
    justifyContent: 'center',
  },
  submit_txt: {
    textAlign: 'center',
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.medium,
  },
  manage_planet: {
    textAlign: 'left',
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.xxxl,
  },
  success_txt: {
    textAlign: 'center',
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
  error_txt: {
    textAlign: 'center',
    color: COLORS.light.red,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
});
