import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/Input_style';
import * as actions from '../actions/changeTextActions';
import firebase from '../firebase/firebase';

const db = firebase.database();
const todo = db.ref('todo');

class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={ styles.txtIn } underlineColorAndroid='rgba(0,0,0,0)' value={this.props.in_text} onChangeText={ (text) => { this.props.editText(text) } } />
        <TouchableOpacity style={styles.tOpa} onPress={ () => { this._pressBtn(); } }>
          <Text style={styles.btnTxt}>追加</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tOpa} onPress={ () => { this.props.navigation.navigate('Result'); } }>
          <Text style={styles.btnTxt}>遷移</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _pressBtn(){
    todo.push().set({
      todo: this.props.in_text,
    });
    this.props.editText('');
  }
}

const mapStateToProps = state => state.ct;
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Input);