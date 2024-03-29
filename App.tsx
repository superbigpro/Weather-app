import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

function App(): React.JSX.Element {

  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  const ask = async() => {
    const permision = await Location.requestBackgroundPermissionsAsync();
    console.log(permision);
  }

  useEffect(() => {
    ask()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
      pagingEnabled 
      horizontal
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle
      ={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    marginTop: 20,
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {

  },
  day: {
    alignItems: "center",
    width: SCREEN_WIDTH, 
  },
  temp: {
    marginTop: 50,
    fontSize: 168,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  },
});

export default App;
