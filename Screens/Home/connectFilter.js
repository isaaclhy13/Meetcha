import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function connectFilter(){
    return(
        <SafeAreaView style={{backgroundColor:"white", flex:1}}>
             <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center',borderColor:'#e0e0e0',
            borderBottomWidth: 0.5, paddingBottom:HEIGHT*0.02}}>
                <TouchableOpacity  onPress={()=>navigation.goBack()} style={{marginTop:HEIGHT*0.02}}>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20, fontFamily:'OpenSans_600SemiBold', color: '#FEC357', marginTop:HEIGHT*0.02}}>Change Password</Text>
                <TouchableOpacity style={{marginTop:HEIGHT*0.02, backgroundColor:'#FEC357', borderRadius:20}}>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'white'}}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>             
    )
}