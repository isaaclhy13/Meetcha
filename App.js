import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, OpenSans_700Bold, OpenSans_400Regular, Roboto_700Bold, OpenSans_600SemiBold, Cabin_600SemiBold } from '@expo-google-fonts/dev';
import { UserContext } from './Screens/Utils/context'
import { TransitionPresets } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';



//Message Page
import Messages from './Screens/Chat/messages'
import Conversation from './Screens/Chat/conversation'

//Home Page 
import Home from './Screens/Home/home'
import connectFilter from './Screens/Home/connectFilter'

//Profile page 
import Profile from './Screens/Profile/profile'
import profileSettings from './Screens/Profile/profileSettings'

import changePassword from './Screens/Settings/changePassword'

//Signup
import signup from './Screens/Login/signup'
import TEST from './Screens/Login/TEST'
import signupEmail from './Screens/Login/signupEmail'
import signupPassword from './Screens/Login/signupPassword'
import signupFirstName from './Screens/Login/signupFirstName'
import signupLastName from './Screens/Login/signupLastName'
import signupGender from './Screens/Login/signupGender'
import signupProfilePic from './Screens/Login/signupProfilePic'
import signupPhotoAlbum from './Screens/Login/signupPhotoAlbum'
import login from './Screens/Login/login'

var HEIGHT = Dimensions.get('window').height;

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
    OpenSans_400Regular,
    Roboto_700Bold,
    OpenSans_600SemiBold,
    Cabin_600SemiBold
    

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
                <Stack.Screen name='connectFilter' component={connectFilter} options={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, cardStyle: {height:HEIGHT*0.5 }}} />
                <Stack.Screen name='profileSettings' component={profileSettings} />
                <Stack.Screen name="changePassword" component={changePassword} />


              </>
              :
              <>
               
              <Stack.Screen name="signupFirstName" component={signupFirstName} />
              <Stack.Screen name="signupLastName" component={signupLastName} />
              <Stack.Screen name="signupGender" component={signupGender} />
              <Stack.Screen name="signupProfilePic" component={signupProfilePic} />
              <Stack.Screen name="signupPhotoAlbum" component={signupPhotoAlbum} />
              
              </>
            :
            <>
           
              <Stack.Screen name="signup" component={signup} />
              <Stack.Screen name="signupEmail" component={signupEmail} options={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} />
              <Stack.Screen name="signupPassword" component={signupPassword} />
              <Stack.Screen name="login" component={login} options={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}}/>






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
