import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/dev';
import { UserContext } from './Screens/Utils/context'

//Message Page
import Messages from './Screens/Chat/messages'
import Conversation from './Screens/Chat/conversation'

//Home Page 
import Home from './Screens/Home/home'

//Profile page 
import Profile from './Screens/Profile/profile'

//test
import signup from './Screens/Login/signup'
import TEST from './Screens/Login/TEST'


const Stack = createStackNavigator();
function chatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
  );
}

function homeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="signup" component={signup} />
    </Stack.Navigator>
  );
}

function Main() {
  return (
    <Tab.Navigator initialRouteName={'Home'} tabBarOptions={{ showLabel: false, style: { borderTopWidth: 0 } }}>
      <Tab.Screen name="Chat"
        component={chatStack}
        options={{
          tabBarIcon: () => (<FontAwesome name={'comment'} size={30} color={'#FEC357'} />),
        }} />
      <Tab.Screen name="Home"
        component={homeStack}
        options={{
          tabBarIcon: () => (<FontAwesome name={'home'} size={40} color={'#FEC357'} />),
        }} />
      <Tab.Screen name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (<FontAwesome name={'user'} size={30} color={'#FEC357'} />),
        }} />
    </Tab.Navigator>
  )
}


const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState()
  const [sUser, setSUser] = useState()

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    OpenSans_700Bold,
    OpenSans_400Regular

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={[user, setUser]}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardOverlayEnabled: false,
          }}
        >

          {user ?
            user.onboard ?
              <>
                <Stack.Screen name='Main' component={Main} />
              </>
              :
              <>
                <Stack.Screen name='TEST' component={TEST} />
              </>
            :
            <>
              <Stack.Screen name="signup" component={signup} />
            </>
          }

        </Stack.Navigator>
      </UserContext.Provider>
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
