import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feed from './screens/Feed';
import {useSelector} from 'react-redux';
import {COLORS} from './constants/theme';
import FeedDetail from './screens/FeedDetail';
import Form from './screens/Form';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Feeds':
              iconName = 'home';
              break;
            case 'Form':
              iconName = 'input';
              break;

            default:
              'Feed';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#1E0B46',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {},
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Feeds"
        component={FeedNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const OnBoard = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  const isBoarded = useSelector(state => state.onBoard.isBoarded);

  if (isBoarded) return <TabNavigator />;
  return <OnBoard />;
};

export default MainApp;
