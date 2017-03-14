import axios from 'axios';
import { Platform } from 'react-native';
import { MONGODB_URI } from 'react-native-dotenv';

let url;

url = 'https://chatapp-backend.herokuapp.com/api'

axios.defaults.baseURL = url;

const fakeGroupId = '58c70a1b36452900118df5bb';

class ChatApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/chats`;
  }

  async fetchGroupChats() {
    const { data } = await axios.get(this.path);
    return data.chats;
  }
}

export {
  ChatApi
};
