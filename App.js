import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Count from './count';
import {countReducer} from './redux/countReducer';

const store = createStore(countReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Hello world </Text>
          <Count />
        </View>
      </Provider>
    );
  }
}

export default App;
