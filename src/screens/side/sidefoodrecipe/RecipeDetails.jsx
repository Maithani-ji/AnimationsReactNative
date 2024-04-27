import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  HandThumbUpIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
const RecipeDetails = props => {
  const item = props?.route?.params;
  const [isFav, setIsFav] = useState(false);
  const ingredient = item?.extendedIngredients?.map(item => item.original);
  const instruction = item?.analyzedInstructions[0]?.steps.map(
    item => item.step,
  );
  const types = item?.dishTypes?.map(item => item);
  const friendly = item?.diets?.map(item => item);
  // console.log(instruction, ingredient);
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}>
      <StatusBar barStyle={'dark-content'} />
      <View className="flex-row justify-center">
        <Animated.Image
          source={{uri: item.image}}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 53,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            marginTop: 10,
          }}
          sharedTransitionTag={item.title}
        />
      </View>
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          className="rounded-full p-2 ml-5 bg-white">
          <ChevronLeftIcon size={hp(3, 5)} color={'purple'} strokeWidth={4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFav(!isFav)}
          className="rounded-full p-2 mr-5 bg-white">
          <HeartIcon
            size={hp(3, 5)}
            color={!isFav ? 'lightgray' : 'red'}
            strokeWidth={3}
          />
        </TouchableOpacity>
      </Animated.View>
      <View className="px-4 flex justify-between space-y-4 pt-8">
        <Animated.View
          entering={FadeInDown.duration(700).springify().damping(12)}
          className="space-y-2">
          <Text
            style={{fontSize: hp(3)}}
            className="font-bold flex-1 text-neutral-800">
            {item.title}
          </Text>
          <Text
            style={{fontSize: hp(2), color: item.vegetarian ? 'green' : 'red'}}
            className="font-medium flex-1">
            {item.vegetarian ? 'Veg' : 'Non-Veg'}
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
          className="flex-row justify-around">
          <View className=" flex rounded-full  bg-purple-500 p-2">
            <View
              style={{height: hp(5.5), width: hp(5.5)}}
              className="bg-white flex rounded-full  items-center justify-center">
              <ClockIcon size={hp(3)} strokeWidth={2.5} color={'#525252'} />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{fontSize: hp(2), color: 'white'}}
                className="font-bold ">
                {item.readyInMinutes}
              </Text>
              <Text
                style={{fontSize: hp(1.5), color: 'white'}}
                className="font-bold ">
                mins
              </Text>
            </View>
          </View>
          <View className=" flex rounded-full  bg-purple-500 p-2">
            <View
              style={{height: hp(5.5), width: hp(5.5)}}
              className="bg-white  flex rounded-full  items-center justify-center">
              <UserIcon size={hp(3)} strokeWidth={2.5} color={'#525252'} />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{fontSize: hp(2), color: 'white'}}
                className="font-bold ">
                {item.servings}
              </Text>
              <Text
                style={{fontSize: hp(1.4), color: 'white'}}
                className="font-bold ">
                Servings
              </Text>
            </View>
          </View>
          <View className=" flex rounded-full  bg-purple-500 p-2">
            <View
              style={{height: hp(5.5), width: hp(5.5)}}
              className="bg-white  flex rounded-full  items-center justify-center">
              <FireIcon size={hp(3)} strokeWidth={2.5} color={'#525252'} />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{fontSize: hp(2), color: 'white'}}
                className="font-bold ">
                {item.healthScore}/10
              </Text>
              <Text
                style={{fontSize: hp(1.4), color: 'white'}}
                className="font-bold ">
                Health
              </Text>
            </View>
          </View>
          <View className=" flex rounded-full  bg-purple-500 p-2">
            <View
              style={{height: hp(5.5), width: hp(5.5)}}
              className="bg-white  flex rounded-full  items-center justify-center">
              <HandThumbUpIcon
                size={hp(3)}
                strokeWidth={2.5}
                color={'#525252'}
              />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{fontSize: hp(2), color: 'white'}}
                className="font-bold ">
                {item.aggregateLikes}
              </Text>
              <Text
                style={{fontSize: hp(1.4), color: 'white'}}
                className="font-bold ">
                Likes
              </Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(300).duration(700).springify().damping(12)}
          className="space-y-4 ">
          <Text
            style={{fontSize: hp(2.5)}}
            className="font-bold flex-1 text-neutral-800">
            Ingredients
          </Text>
          <View className="space-y-2 ml-4 ">
            {ingredient.map((item, i) => (
              <View key={i} className="flex-row space-x-4">
                <View
                  style={{height: hp(1.5), width: hp(1.5), marginTop: 5}}
                  className="bg-purple-600 rounded-full"></View>
                <View className="flex-row space-x-2">
                  <Text
                    style={{fontSize: hp(1.7)}}
                    className="font-medium text-neutral-800">
                    {item}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(500).duration(700).springify().damping(12)}
          className="space-y-4 ">
          <Text
            style={{fontSize: hp(2.5)}}
            className="font-bold flex-1 text-neutral-800">
            Instructions
          </Text>
          <View className="space-y-2 ml-4 ">
            {instruction.map((item, i) => (
              <View key={i} className="flex-row space-x-4">
                <View
                  style={{height: hp(1.5), width: hp(1.5), marginTop: 5}}
                  className="bg-purple-600 rounded-full"></View>
                <View className="flex-row space-x-2">
                  <Text
                    style={{fontSize: hp(1.7)}}
                    className="font-medium text-neutral-800">
                    {item}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(700).duration(700).springify().damping(12)}
          className="space-y-4 ">
          <Text
            style={{fontSize: hp(2.5)}}
            className="font-bold flex-1 text-neutral-800">
            Dish-Type
          </Text>
          <View className="space-y-2 ml-4 ">
            {types.map((item, i) => (
              <View key={i} className="flex-row space-x-4">
                <View
                  style={{height: hp(1.5), width: hp(1.5), marginTop: 5}}
                  className="bg-purple-600 rounded-full"></View>
                <View className="flex-row space-x-2">
                  <Text
                    style={{fontSize: hp(1.7)}}
                    className="font-medium text-neutral-800">
                    {item}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(900).duration(700).springify().damping(12)}
          className="space-y-4 ">
          <Text
            style={{fontSize: hp(2.5)}}
            className="font-bold flex-1 text-neutral-800">
            Friendly-For
          </Text>
          <View className="space-y-2 ml-4 ">
            {friendly.length > 0 ? (
              friendly?.map((item, i) => (
                <View key={i} className="flex-row space-x-4">
                  <View
                    style={{height: hp(1.5), width: hp(1.5), marginTop: 5}}
                    className="bg-purple-600 rounded-full"></View>
                  <View className="flex-row space-x-2">
                    <Text
                      style={{fontSize: hp(1.7)}}
                      className="font-medium text-neutral-800">
                      {item}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View className="flex-row space-x-4">
                <View
                  style={{height: hp(1.5), width: hp(1.5), marginTop: 5}}
                  className="bg-purple-600 rounded-full"></View>
                <View className="flex-row space-x-2">
                  <Text
                    style={{fontSize: hp(1.7)}}
                    className="font-medium text-neutral-800">
                    Everyone
                  </Text>
                </View>
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
