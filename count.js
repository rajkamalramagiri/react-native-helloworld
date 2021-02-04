import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {increment} from './redux/countAction';

function Count(props) {
  const newCount = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>count {props.count}</Text>
      <Text>count {newCount}</Text>

      <Button title="increment" onPress={props.increment}></Button>
      <Text></Text>
      <Button title="increment" onPress={() => dispatch(increment())}></Button>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
