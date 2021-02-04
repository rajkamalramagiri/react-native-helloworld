import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {incrementCake} from './redux/cakeAction';
import {increment} from './redux/countAction';

function Count(props) {
  const cakeCount = useSelector((state) => state.cake.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>count {props.count}</Text>

      <Button title="increment count" onPress={props.increment}></Button>
      <Text></Text>
      <Text> cake count {cakeCount}</Text>

      <Button
        title="increment cake"
        onPress={() => dispatch(incrementCake())}></Button>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
