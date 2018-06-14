import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles/Result_styles';
import firebase from '../firebase/firebase';

const db = firebase.database();
const db_todo = db.ref('todo');

class Result extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      todo:[],
      flatListVersion:0,
      refreshing: false,
    };

    db_todo.on('child_added',child=>{
      this.state.todo.push(child.val());
      this.state.flatListVersion++;
    });

    db_todo.on('child_changed',child=>{
      this.state.todo.push(child.val());
      this.state.flatListVersion++;
    });
  }

    _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    if (this.state.refreshing) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList style={styles.listView} refreshing={this.state.refreshing} execData={this.state.flatListVersion} data={this.state.todo} keyExtractor={(item, index) => String(index)} renderItem={this._renderItem} scrollEnabled={true} />
        <TouchableOpacity style={styles.tOpa} onPress={ () => { this.props.navigation.goBack(); } }>
          <Text style={styles.btnTxt}>戻る</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderItem = ({item}) => (
      <Text style={styles.txt}>
        {item.todo}
      </Text>
    );
}

const mapStateToProps = state => state.ct;


export default connect(mapStateToProps)(Result);