import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, OpenSans_700Bold} from '@expo-google-fonts/dev';


//Message Page
import Messages from './Screens/Chat/messages'

//Home Page 
import Home from './Screens/Home/home'

//Profile page 
import Profile from './Screens/Profile/profile'



const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    OpenSans_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
    <Tab.Navigator tabBarOptions={{ showLabel: false, style:{borderTopWidth:0}}}>
    <Tab.Screen name="Chat" 
                component={Messages}
                options={{
                  tabBarIcon: ()=> (<FontAwesome name={'comment'} size={30} color={'#FEC357'} />),
                }} />
      <Tab.Screen name="Home" 
                  component={Home}
                  options={{
                    tabBarIcon: ()=> (<FontAwesome name={'home'} size={40} color={'#FEC357'} />),
                  }} />
      <Tab.Screen name="Profile" 
                  component={Profile}
                  options={{
                    tabBarIcon: ()=> (<FontAwesome name={'user'} size={30} color={'#FEC357'} />),
                  }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
