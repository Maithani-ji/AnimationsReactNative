import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
const HomeScreen = ({navigation}) => {
  const ring1 = useSharedValue(0);
  const ring2 = useSharedValue(0);

  useEffect(() => {
    ring1.value = 0;
    ring2.value = 0;
    const timeout1 = setTimeout(() => {
      ring1.value = withSpring(ring1.value + hp(4));

      ring2.value = withSpring(ring2.value + hp(4));
    }, 200);

    const timeout2 = setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center space-y-10 bg-purple-600">
      <StatusBar backgroundColor={'rgb(147, 51 ,234)'} />
      <View className="flex items-center space-y-2 ">
        <Text
          className="font-bold text-white tracking-widest"
          style={{fontSize: hp(5)}}>
          CookBook 🍳
        </Text>
      </View>

      {/* Circle 1 */}
      <Animated.View
        className="bg-white/10 rounded-full "
        style={{padding: ring1}}>
        {/* Circle 2 */}
        <Animated.View
          className="bg-white/20 rounded-full "
          style={{padding: ring2}}>
          <Image
            source={require('../../../assests/appassests/cooking.png')}
            style={{height: 170, width: 170}}
          />
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-white tracking-widest"
          style={{fontSize: hp(3)}}>
          Anyone can Cook!🍔
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
