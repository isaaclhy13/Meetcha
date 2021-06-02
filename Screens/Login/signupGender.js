import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupGender({navigation,route }) {
    const [user, setUser] = useContext(UserContext);
    const [gender, setGender] = useState('f');
   

    const checkgender = () => {
      //Test here 
      navigation.navigate('signupProfilePic',{password: route.params.password, firstName: route.params.firstName, lastName:route.params.lastName, gender:gender, email:route.params.email})
    }
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, }}>
           
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.3,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>My Gender is </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454', marginTop:HEIGHT*0.01}}>Gender discrimination is not tolerable   </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>in Meetcha. We hope to create a </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>safe space for everyone. </Text>

              
            </View>
            <TouchableOpacity disabled={gender == '' ? true : false} onPress={checkgender} style={{height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: gender == '' ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}