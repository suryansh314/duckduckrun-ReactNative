import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBox(props) {
  const displayType = props.displayType;
  const [input, setInput] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'lightgray',
          borderRadius: 999,
        }}>
        <View style={{padding: 5}}>
          <TouchableOpacity>
            <Icon name="search" size={15} color="gray" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{flex: 1,backgroundColor: 'transparent',}}
            value={input}
            placeholder="Type something!"
            onChangeText={(e) => {
              setInput(e);
            }}
            onSubmitEditing={() => {
              if (input.split(' ').join('').length > 0) {
                props.navigation.navigate('SearchResults', { term: { input } });
              }
            }}
          />
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity>
            <Icon name="microphone" size={15} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={
            displayType == 1
              ? {
                  margin: 0,
                  paddingHorizontal: 7,
                  paddingVertical: 10,
                  alignItems: 'center',
                  width: '80%',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid lightgray',
                  color: '#5f6368',
                  borderRadius: 5,
                }
              : { display: 'none' }
          }
          onPress={() => {
            if (input.split(' ').join('').length > 0) {
              props.navigation.navigate('SearchResults', { term: { input } });
            }
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
