import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Drag = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});

  const start = useSharedValue({x: 0, y: 0});
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      offset.value = {
        x: withTiming(0, {duration: 1000}),
        y: withTiming(0, {duration: 1000}),
      };
      //  start.value = { // when you want to change the position and not make it go back to original position
      //    x: offset.value.x,
      //    y: offset.value.y,
      //  };
      // isPressed.value = false; // Reset isPressed state
    })

    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'magenta',
    };
  });
  return (
    <GestureHandlerRootView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {height: 100, width: 100, backgroundColor: 'magenta'},
            animatedStyles,
          ]}
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Drag;

const styles = StyleSheet.create({});
