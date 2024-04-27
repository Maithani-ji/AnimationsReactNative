import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const CardItem = ({item, index, navigation}) => {
  let isEven = index % 2 === 0;
  const isThirdItem = index % 3 === 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(20)}>
      <Pressable
        onPress={() => navigation.navigate('RecipeDetail', {...item})}
        style={{
          width: '100%',
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1">
        <Animated.Image
          source={{uri: item.image}}
          className="bg-black/5"
          style={{
            width: '100%',
            height: isThirdItem ? hp(25) : hp(35),
            borderRadius: 30,
          }}
          sharedTransitionTag={item.title}
          resizeMode="cover"
        />
        <Text style={{fontSize: hp(1.7)}} className="font-bold text-black">
          {item.title.length > 20
            ? item.title.slice(0, 30) + '...'
            : item.title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
