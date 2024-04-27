import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import categories from '../../utilities/recipeconstant.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {FadeInDown} from 'react-native-reanimated';
const Categories_MainScreen = ({
  category,
  setCategory,
  fetchRecipes,
  setSearch,
}) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-6"
        contentContainerStyle={{
          paddingBottom: 0,
          marginLeft: 15,
          paddingEnd: 25,
        }}>
        {categories?.map(item => {
          let ispressed = item.category == category;

          return (
            <TouchableOpacity
              onPress={() => {
                setSearch(null);
                setCategory(item.category);
                fetchRecipes(item.category);
              }}
              key={item.id}
              className="flex items-center space-y-2">
              <View className={'rounded-full p-[6px]'}>
                <Animated.Image
                  source={{uri: item.image}}
                  style={{
                    width: !ispressed ? hp(7) : hp(8),
                    height: !ispressed ? hp(7) : hp(8),
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text
                className="text-neutral-600"
                style={{
                  fontSize: ispressed ? hp(1.8) : hp(1.6),
                  fontWeight: ispressed ? 'bold' : 'normal',
                }}>
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories_MainScreen;

const styles = StyleSheet.create({});
