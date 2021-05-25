import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Messages from './Screens/Chat/messages'



const Tab = createBottomTabNavigator();

export default function App() {
  function ChatScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    <Tab.Screen name="Chat" 
                component={Messages}
                options={{
                  tabBarIcon: ()=> (<FontAwesome name={'comment'} size={30} color={'#FEC357'} />),
                }} />
      <Tab.Screen name="Home" 
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ()=> (<FontAwesome name={'home'} size={40} color={'#FEC357'} />),
                  }} />
      <Tab.Screen name="Profile" 
                  component={ProfileScreen}
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
