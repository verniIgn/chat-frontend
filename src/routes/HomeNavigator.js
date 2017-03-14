import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen
} from '../screens';


export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  Profile: {
    screen: ProfileScreen
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.medBlueColor,
    indicatorStyle: { backgroundColor: Colors.redColor },
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    style: {
      backgroundColor: Colors.whiteColor
    }
  }
});
