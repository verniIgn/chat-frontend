import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ChatApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { ChatList } from './components';
import styles from './styles/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import * as Expo from 'expo';
import { Components } from 'expo';


const chatApi = new ChatApi();

class HomeScreen extends Component {
  static defaultProps = {
    chatApi
  }

  static navigationOptions = {
    header: {
      style: { backgroundColor: Colors.redColor }
    },
    tabBar: {
      icon: ({ tintColor }) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      )
    }
  }

  state = {
    loading: false,
    chats: []
  }

  async getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      var locObj = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      console.log(locObj['coords'].longitude);
      return locObj
    } else {
      throw new Error('Location permission not granted');
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const chats = await this.props.chatApi.fetchGroupChats();
    this.setState({ loading: false, chats });
    this.getLocationAsync()
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <Components.MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.bottomContainer}>
          <ChatList chats={this.state.chats} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
