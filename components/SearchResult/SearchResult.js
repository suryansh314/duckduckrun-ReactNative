import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CONTEXT_KEY = '179d82ad5c543e4c0';
const API_KEY = 'AIzaSyCN27GezMNzyPHPd9eFOAFUvp7ubUDSgeo';

export default function SearchResult(props) {
  const [data, setData] = useState(null);
  const term = JSON.stringify(props.input.input);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(term)
        });
    };
    fetchData();
  }, [term]);

  return (
    <ScrollView>
      {data ? (
        <View
          style={{
            margin: 12,
            marginTop: 0,
            flexDirection: 'column',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              margin: 2,
              padding: 2,
            }}>
            About <Text>{data?.searchInformation.formattedTotalResults}</Text>{' '}
            results{' '}
            <Text>
              (in {''}
              {data?.searchInformation.formattedSearchTime} seconds)
            </Text>
          </Text>

          <View>
            {data.items.map((item) => (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 0,
                    marginLeft: 2,
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'medium',
                      color: 'gray',
                    }}>
                    {item.displayLink} ▾
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity
                    style={{ marginTop: 10, marginBottom: 0 }}
                    onPress={() => Linking.openURL(item.link)}>
                    <Text
                      style={{
                        color: '#0000EE',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 2,
                      marginRight: 2,
                    }}>
                    {item.snippet}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}
