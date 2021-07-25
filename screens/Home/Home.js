import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import SearchBox from '../../components/Search/SearchBox';

const logo = require('../../assets/Images/logo.jpg');

export default function Home({ navigation }) {
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
          marginTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity>
                <Icon name="bars" size={15} color="gray" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text>Images</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.18,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity>
                <Icon name="question-circle" size={15} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name="user-circle" size={15} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={logo}
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <SearchBox navigation={navigation} displayType="1" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'gray'}}>
            Made with <Text style={{color: '#61DBFD'}}>React Native</Text>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
