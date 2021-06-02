import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../Utils/context'
import { NavigationEvents } from 'react-navigation';

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupEmail({navigation}) {
    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, }}>
           
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.3,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>What's your email</Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454', marginTop:HEIGHT*0.01}}>Don’t worry we will never share </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>your information.</Text>
                <TextInput autoFocus={true} onChangeText={(value)=> setEmail(value)} value={email} style={{height:HEIGHT*0.065, width:WIDTH*0.8, borderRadius:40,
                borderWidth:2, borderColor:'#E0E0E0', marginTop:HEIGHT*0.05, paddingLeft:WIDTH*0.05}}/>
            </View>
            <TouchableOpacity disabled={email == '' ? true : false} onPress={()=>navigation.navigate('signupPassword', {email:email})} style={{height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: email == '' ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}