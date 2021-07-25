import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import SearchBox from '../../components/Search/SearchBox';
import SearchResult from '../../components/SearchResult/SearchResult';

import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require('../../assets/Images/logo.jpg');

export default function SearchResults({ navigation, route }) {
  var input = route.params.term;
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 25,
      }}>
      <SafeAreaView
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.050,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
          <TouchableOpacity>
            <Icon name="bars" size={15} color="gray" />
          </TouchableOpacity>
        </View>
             <View>
          <TouchableOpacity>
            <Icon name="user-circle" size={15} color="black" />
          </TouchableOpacity>
        </View>
          </View>
          <View
            style={{
              flex: 0.095,
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
            <Image
              source={logo}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
              }}
            />
          </View>
          <View style={{ backgroundColor: 'white', flex: 0.1, padding: 5 }}>
            <SearchBox navigation={navigation} displayType="0" />
          </View>
          <View
            style={{ flex: 1, backgroundColor: 'white',}}>
            <SearchResult input={input} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
