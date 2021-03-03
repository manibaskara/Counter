import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {incrementAction, decrementAction} from '../store/actions/counterAction';

const Counter = ({count, increase, decrease}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text>{count}</Text>
        <Button
          title="Increment"
          style={styles.buttonStyle}
          onPress={() => {
            console.log('increment');
            increase();
          }}
        />
        <Button
          title="Decrement"
          style={styles.buttonStyle}
          onPress={() => decrease()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  buttonStyle: {margin: 12, padding: 12},
});

const mapStatesToProp = (state) => {
  return {count: state.counter.count};
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(incrementAction());
    },
    decrease: () => {
      dispatch(decrementAction());
    },
  };
};

export default connect(mapStatesToProp, mapDispatchToProps)(Counter);
