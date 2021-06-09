import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function changePassword({navigation,route }) {
    const [user, setUser] = useContext(UserContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')


    const changePassword = () => {
        if(newPassword != confirmNewPassword){
            alert('New password does not match!')
        }
        if(newPassword.length < 8){
            alert('Password must be 8 or more character!')
        }
        else{
            const emailCred  = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
            firebase.auth().currentUser.reauthenticateWithCredential(emailCred)
                .then(() => {
                  // User successfully reauthenticated.
                firebase.auth().currentUser.updatePassword(newPassword);
                alert('Password updated!');
                navigation.goBack();
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
   
  
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center',borderColor:'#e0e0e0',
            borderBottomWidth: 0.5, paddingBottom:HEIGHT*0.02}}>
                <TouchableOpacity  onPress={()=>navigation.goBack()} style={{marginTop:HEIGHT*0.02}}>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20, fontFamily:'OpenSans_600SemiBold', color: '#FEC357', marginTop:HEIGHT*0.02}}>Change Password</Text>
                <TouchableOpacity  onPress={changePassword} style={{marginTop:HEIGHT*0.02}}>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_700Bold', color:'#FEC357'}}>Update</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.05, flexDirection:'row', alignSelf:'center'}}>
                <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center',}}>
                    <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:15}}>Old Password</Text>
                </View>
                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                    <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                        <TextInput onChangeText={(value)=>setOldPassword(value)} value={oldPassword} style={{paddingLeft:WIDTH*0.05, flex:1}} textAlign='left' />
                    </View>
                </View>
             </View>
             <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.03, flexDirection:'row', alignSelf:'center'}}>
                <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center',}}>
                    <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:15}}>New Password</Text>
                </View>
                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                    <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                        <TextInput onChangeText={(value)=>setNewPassword(value)} value={newPassword} style={{paddingLeft:WIDTH*0.05, flex:1}} textAlign='left' />
                    </View>
                </View>
             </View>
             <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.03, flexDirection:'row', alignSelf:'center'}}>
                <View style={{height:HEIGHT*0.035,width:WIDTH*0.35, alignItems:'flex-start',justifyContent:'center',}}>
                    <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:15}}>Confirm Password</Text>
                </View>
                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.05,alignItems:'flex-end',justifyContent:'center'}}>
                    <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                        <TextInput onChangeText={(value)=>setConfirmNewPassword(value)} value={confirmNewPassword} style={{paddingLeft:WIDTH*0.05, flex:1}} textAlign='left' />
                    </View>
                </View>
             </View>

           
           
        </SafeAreaView>
    )
}