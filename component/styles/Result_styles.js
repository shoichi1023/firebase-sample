import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 25,
    textAlign:'center',
    borderWidth:2,
    borderColor:'#000',
    borderStyle:'solid',
    padding:5,
  },
  listView:{
    alignSelf: 'stretch',
  },
  tOpa: {
    width: 100,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  btnTxt: {
    fontSize: 18,
  },
});

export default styles;