import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ChatApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { ChatList } from './components';
import styles from './styles/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';


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

  async componentDidMount() {
    this.setState({ loading: true });
    const chats = await this.props.chatApi.fetchGroupChats();
    this.setState({ loading: false, chats });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ChatList chats={this.state.chats} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
