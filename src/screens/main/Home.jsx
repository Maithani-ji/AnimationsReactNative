import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const data = [
    {title: 'Recipe App', sname: 'HomeScreen'},
    {title: 'Basic Animation', sname: 'Basic'},
    {title: 'Interpolation Animation', sname: 'Interpolation'},
    {title: 'Drag Animation', sname: 'Drag'},
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {data.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.sname)}
          key={item.sname}
          style={{
            backgroundColor: 'purple',
            elevation: 10,
            padding: 10,
            marginBottom: 10,
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
