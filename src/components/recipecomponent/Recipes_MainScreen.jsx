import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import CardItem from './CardItems_Recipes';
import {recipes} from '../../utilities/recipeconstant';
import {useNavigation} from '@react-navigation/native';
const Recipes_MainScreen = ({Data}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: -5}} className="mx-4 space-y-3">
      <Text
        style={{fontSize: hp(3)}}
        className="font-semibold text-neutral-600">
        Recipes
      </Text>
      <View>
        <MasonryList
          data={Data}
          keyExtractor={item => item?.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, i}) => (
            <CardItem item={item} index={i} navigation={navigation} />
          )}
          // refreshing={isLoadingNext}
          //  onRefresh={() => refetch({first: ITEM_CNT})}
          onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
        />
      </View>
    </View>
  );
};

export default Recipes_MainScreen;

const styles = StyleSheet.create({});
