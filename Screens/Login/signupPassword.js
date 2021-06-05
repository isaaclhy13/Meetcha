import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../Utils/context'
import { NavigationEvents } from 'react-navigation';

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupPassword({navigation, route}) {
    const [user, setUser] = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const checkPassword = () =>{
        if(password == ''){
            alert('Password cannot be empty.')
            setPassword('')
            setConfirmPassword('')
        }
        else if(password!=confirmPassword){
            alert('Password does not match.')
            setPassword('')
            setConfirmPassword('')
        }
        else if(password.length < 8){
            alert('Password must contain at least 8 characters.')
            setPassword('')
            setConfirmPassword('')
        }
        else{
            navigation.navigate('signupFirstName', {password:password,email:route.params.email})
        }
    }
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, }}>
           <KeyboardAvoidingView>
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.35,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>Set your password</Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454', marginTop:HEIGHT*0.01}}>Don't share this information </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>to anyone.</Text>
                <TextInput secureTextEntry={true} autoFocus={true} onChangeText={(value)=> setPassword(value)} value={password} placeholder='Password' style={{height:HEIGHT*0.065, width:WIDTH*0.8, borderRadius:40,
                borderWidth:2, borderColor:'#E0E0E0', marginTop:HEIGHT*0.05, paddingLeft:WIDTH*0.05}}/>
                <TextInput secureTextEntry={true} onChangeText={(value)=> setConfirmPassword(value)} value={confirmPassword} placeholder='Confirm password' style={{height:HEIGHT*0.065, width:WIDTH*0.8, borderRadius:40,
                borderWidth:2, borderColor:'#E0E0E0', marginTop:HEIGHT*0.02, paddingLeft:WIDTH*0.05}}/>
            </View>
            <TouchableOpacity  onPress={checkPassword} disabled={password == '' ? true : false} style={{height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: password == '' ? '#e3e3e3': '#FEC357'  , alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}