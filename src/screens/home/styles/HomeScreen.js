import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '$medBlueColor'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackBlueColor
  },
  bottomContainer: {
    flex: 0.9,
    backgroundColor: Colors.medBlueColor
  }
});

export default styles;
