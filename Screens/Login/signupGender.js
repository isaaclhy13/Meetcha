import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupGender({navigation,route }) {
    const [user, setUser] = useContext(UserContext);
    const [gender, setGender] = useState(user.gender == null ? '' : user.gender);
   
   

    const selectGender = () => {
        if(gender != ''){
            firebase.firestore().collection('users').doc(user.id).update({
                gender : gender
            })
            navigation.navigate('signupProfilePic')
        }
    }
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, backgroundColor:'white' }}>
           
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.2,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>My Gender is </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454', marginTop:HEIGHT*0.01}}>Gender discrimination is not tolerable   </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>in Meetcha. We hope to create a </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>safe space for everyone. </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> setGender('Male')} style={{height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: gender == 'Male' ? '#FEC357' : '#f5f5f5' , alignSelf:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> setGender('Female')} style={{height:HEIGHT*0.08, width:WIDTH*0.85, marginTop:HEIGHT*0.02, borderRadius:40, backgroundColor: gender == 'Female' ? '#FEC357' : '#f5f5f5' , alignSelf:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> setGender('Other')} style={{height:HEIGHT*0.08, width:WIDTH*0.85, marginTop:HEIGHT*0.02, borderRadius:40, backgroundColor: gender == 'Other' ? '#FEC357' : '#f5f5f5' , alignSelf:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Other</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={gender == '' ? true : false} onPress={selectGender} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: gender == '' ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}