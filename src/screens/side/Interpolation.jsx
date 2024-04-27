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
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const Interpolation = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedstyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [0, 1], [100, 200]);
    const backgroundColor = interpolateColor(
      animation.value,
      [0, 1],
      ['orange', 'pink'],
    );
    const borderRadius = interpolate(animation.value, [0, 1], [0, 100]);
    return {
      width: width,
      height: width,
      backgroundColor,
      borderRadius,
    };
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
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
              //backgroundColor: 'lightgreen',
              borderRadius: 50,
              marginBottom: 10,
              //elevation: 10,
            },
            animatedstyle,
          ]}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked) animation.value = withSpring(0);
            else animation.value = withSpring(1);
            setClicked(!clicked);
          }}
          style={{
            backgroundColor: 'violet',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>Animate Interpolation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Interpolation;

const styles = StyleSheet.create({});
