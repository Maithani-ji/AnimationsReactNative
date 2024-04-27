import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const Basicanimation = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedstyle = useAnimatedStyle(() => {
    return {transform: [{translateX: animation.value}]};
  });
  const animation1 = useSharedValue(0);
  const [clicked1, setClicked1] = useState(false);
  const animatedstyle1 = useAnimatedStyle(() => {
    return {transform: [{translateX: animation1.value}]};
  });
  const animation2 = useSharedValue(0);
  const [clicked2, setClicked2] = useState(false);
  const animatedstyle2 = useAnimatedStyle(() => {
    return {transform: [{rotate: `${animation2.value}deg`}]};
  });
  const animation3 = useSharedValue(0.5);
  const [clicked3, setClicked3] = useState(false);
  const animatedstyle3 = useAnimatedStyle(() => {
    return {transform: [{scale: animation3.value}]};
  });
  return (
    <ScrollView
      contentContainerStyle={{
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 50,
      }}>
      <View style={{alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              backgroundColor: 'lightgreen',
              borderRadius: 50,
              marginBottom: 10,
              elevation: 10,
            },
            animatedstyle,
          ]}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked) animation.value = withSpring(-100);
            else animation.value = withSpring(100);
            setClicked(!clicked);
          }}
          style={{
            backgroundColor: 'violet',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>Anitmate withSpring</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              backgroundColor: 'lightgreen',
              borderRadius: 50,
              marginBottom: 10,
              elevation: 10,
            },
            animatedstyle1,
          ]}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked1) animation1.value = withTiming(-100, {duration: 100});
            else animation1.value = withTiming(100, {duration: 100});
            setClicked1(!clicked1);
          }}
          style={{
            backgroundColor: 'violet',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>Anitmate withTiming</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 150,
              height: 100,
              backgroundColor: 'lightgreen',
              // borderRadius: 50,
              marginBottom: 10,
              elevation: 10,
            },
            animatedstyle2,
          ]}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked2) animation2.value = withSpring(-360);
            else animation2.value = withSpring(360);
            setClicked2(!clicked2);
          }}
          style={{
            backgroundColor: 'violet',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>Anitmate rotate</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 150,
              height: 100,
              backgroundColor: 'lightgreen',
              // borderRadius: 50,
              marginBottom: 10,
              elevation: 10,
            },
            animatedstyle3,
          ]}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked3) animation3.value = withSpring(0);
            else animation3.value = withSpring(1);
            setClicked3(!clicked3);
          }}
          style={{
            backgroundColor: 'violet',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text>Anitmate Scale</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Basicanimation;

const styles = StyleSheet.create({});
