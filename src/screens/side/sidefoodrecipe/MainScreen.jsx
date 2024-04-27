import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import Categories_MainScreen from '../../../components/recipecomponent/Categories_MainScreen';
import Recipes_MainScreen from '../../../components/recipecomponent/Recipes_MainScreen';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {API_KEY, BASE_URL, recipes} from '../../../utilities/recipeconstant';
import Loading from '../../../components/recipecomponent/Loading';
const MainScreen = () => {
  const [category, setCategory] = useState('');
  const [recipeData, setRecipeData] = useState(null);
  const [search, setSearchText] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetchRandomData();
    setRecipeData(recipes);
  }, []);
  const fetchRandomData = async () => {
    try {
      setCategory('');
      setLoad(true);
      const params = {
        apiKey: API_KEY,
        number: 4,
      };

      const response = await axios.get(`${BASE_URL}/random`, {params});
      console.log('fetch data', response.data);
      if (response.status === 200) {
        console.log('Fetched data:', response.data);

        const recipees = response.data?.recipes;

        if (recipees.length > 0) {
          setRecipeData(recipees);
        } else {
          Snackbar.show({
            text: 'No random recipes found .',
            textColor: 'white',
            backgroundColor: '#f0ad4e',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        Snackbar.show({
          text: `Failed to fetch data: Status ${response.status}`,
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } catch (error) {
      Snackbar.show({
        text: error.message || 'Failed to get the data',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
      });
    } finally {
      setLoad(false);
    }
  };
  const fetchSearchesData = async title => {
    try {
      setLoad(true);

      if (title == null || title.trim() == '') {
        throw new Error('Enter an appropriate search text!!');
      }
      const params = {
        apiKey: API_KEY,
        number: 4,
        query: title,
      };

      const response = await axios.get(`${BASE_URL}/complexSearch`, {params});
      console.log('fetch data', response.data);
      if (response.status === 200) {
        console.log('Fetched data:', response.data);

        const recipees = response.data?.results;

        if (recipees.length > 0) {
          setRecipeData(recipees);
        } else {
          Snackbar.show({
            text: 'No Recipes Found!! Check your search or try again.',
            textColor: 'white',
            backgroundColor: '#f0ad4e',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        Snackbar.show({
          text: `Failed to fetch data: Status ${response.status}`,
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } catch (error) {
      Snackbar.show({
        text: error.message || 'Failed to get the data',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
      });
    } finally {
      setLoad(false);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-5">
        <View className="mx-4 flex-row justify-between ">
          <Image
            source={require('../../../assests/appassests/man.png')}
            style={{height: hp(5), width: wp(10)}}
          />
          <Text
            style={{
              textTransform: 'capitalize',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: 25,
              color: 'gray',
              textDecorationLine: 'underline',
            }}>
            The CookBook
          </Text>
          <HeartIcon size={hp(4.5)} color={'red'} />
        </View>
        {/* Search Bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[2px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={'gray'}
            style={{fontSize: hp(2)}}
            className="flex-1 text-base  pl-3 tracking-wider"
            value={search}
            onChangeText={setSearchText}
            onSubmitEditing={() => {
              setCategory('');
              fetchSearchesData(search);
            }}
          />
          <TouchableOpacity
            disabled={load}
            onPress={() => {
              setCategory('');
              fetchSearchesData(search);
            }}
            className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={'gray'}
            />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View>
          <Categories_MainScreen
            category={category}
            setCategory={setCategory}
            fetchRecipes={fetchSearchesData}
            setSearch={setSearchText}
          />
        </View>
        {/* Random and Categorised/Searched Recipes */}
        {load ? (
          <View className="mt-4">
            <Loading />
          </View>
        ) : (
          <View>
            {recipeData != null && <Recipes_MainScreen Data={recipeData} />}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
