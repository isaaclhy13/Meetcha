import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import { UserContext } from '../Utils/context'
import { LinearGradient } from 'expo-linear-gradient';


var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;
export default function signup({navigation}) {
const [user, setUser] = useContext(UserContext);



    return (
        <SafeAreaView style={{ justifyContent: 'center', height: HEIGHT, width: WIDTH }}>
            <LinearGradient colors={[ 'rgba(255,211,130,1)','rgba(254,195,87,1)','rgba(254,195,87,1)']} style={styles.gradient}>
                <View>
                    <Text style={{fontFamily:'Roboto_700Bold', fontSize:45, color:'white'}}>Meetcha</Text>
                </View>
                <View style={{ alignItems:'center', position:'absolute', bottom:HEIGHT*0.05}}>
                    <Text style={{color:'white', fontFamily:'OpenSans_400Regular', fontSize:15 }}>Terms and Services Privacy</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('login')} activeOpacity={0.7} style={{width:WIDTH*0.82, height: HEIGHT*0.07, borderRadius:40, backgroundColor:'white', justifyContent:'center',
                    alignItems:'center',marginTop:HEIGHT*0.01}}>
                        <Text style={{fontFamily:'OpenSans_600SemiBold', color:'#545454'}}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('signupEmail')} 
                    activeOpacity={0.7} style={{width:WIDTH*0.82, height: HEIGHT*0.07, borderRadius:40, borderWidth:3, borderColor:'white', justifyContent:'center',
                    alignItems:'center', marginTop:HEIGHT*0.015}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', color:'white'}}>SIGNUP</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily:'Roboto_700Bold', fontSize:15, color:'white',marginTop:HEIGHT*0.02}}>Trouble signing in?</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
   gradient:{
       position:'absolute',
       height:HEIGHT,
       width:WIDTH,
       justifyContent:'center',
       alignItems:'center'
   }
})

