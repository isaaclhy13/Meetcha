import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';


import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupProfilePic({navigation, route}) {
    const [user, setUser] = useContext(UserContext);
    const [profilePic, setProfilePic] = useState(user.profilePic == null ? '' : user.profilePic);

    const checkProfilePic = () => {
      //Test here 
      if(profilePic != null){
          uriToBlob(profilePic).then((result) =>
              uploadToFirebase(result)
          ).then(() => {
              updateDatabase()
              console.log("File uploaded");
          }).catch((error) => {
              throw error;
          });
        navigation.navigate('signupPhotoAlbum')
      }
    }
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setProfilePic(result.uri);
        }
      };
      const uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                // return the blob
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                // something went wrong
                reject(new Error('uriToBlob failed'));
            };
            // this helps us get a blob
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });
      }
      const uploadToFirebase = (blob) => {
        return new Promise((resolve, reject) => {
            var storageRef = firebase.storage().ref(user.id + '/profilePic');

            storageRef.child('profilePic').put(blob, {
                contentType: 'image/jpeg'
            }).then((snapshot) => {
                blob.close();
                resolve(snapshot);
            }).catch((error) => {
                reject(error);
            })
        });
      }
      const updateDatabase = () => {
        firebase.storage().ref(user.id + '/profilePic').child('profilePic').getDownloadURL().then(function (url) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            firebase.firestore().collection('users').doc(user.id).update({
                profilePic: url
            })
        })
       
      }

    
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, }}>
           
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.2,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>Select my </Text>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>Profile Picture</Text>       
            </View>


            <View style={{height:HEIGHT*0.2, width:HEIGHT*0.2, borderRadius:HEIGHT*0.1, backgroundColor:'#e3e3e3', alignSelf:'center'}}>
                <TouchableOpacity onPress={pickImage} style={{height:HEIGHT*0.2, width:HEIGHT*0.2, borderRadius:HEIGHT*0.1}}>
                    {profilePic != '' &&
                    <Image source={{uri: profilePic}} style={{height:HEIGHT*0.2, width:HEIGHT*0.2, borderRadius:HEIGHT*0.1}} />
                    }
                </TouchableOpacity>
            </View>

            <TouchableOpacity disabled={profilePic == '' ? true : false} onPress={checkProfilePic} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: profilePic == '' ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}