import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function profile(){
    
    return(
        <View style={{backgroundColor:'#FEC357'}}>
            <SafeAreaView style={{flex:1, backgroundColor:'white' }}>

                <View style={{height:HEIGHT*0.85, backgroundColor:'white', paddingTop:HEIGHT*0.1, alignItems:'center'}}>
                    <View style={{width:HEIGHT*0.2, height:HEIGHT*0.2, borderRadius:HEIGHT*0.1, marginTop:HEIGHT*0.05, backgroundColor:'#e0e0e0'}}>
                    
                    </View>
                </View>

                <View style={{height: HEIGHT*0.15,width:WIDTH, backgroundColor:'#FEC357', borderBottomLeftRadius:50, borderBottomRightRadius:50, flexDirection:'row',
                justifyContent:'space-evenly', alignItems:'center', position:'absolute', top:0, paddingTop: HEIGHT*0.05, 
                shadowOffset:{width:0,height:10}, shadowRadius:20, shadowColor:'black', shadowOpacity:0.1}}>
                    <TouchableOpacity>
                        <FontAwesome name='edit' size={40} color='white'/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', fontSize:30, color:'white', alignSelf:'center'}}>Isaac</Text>
                        <Text style={{fontFamily:'OpenSans_400Regular', fontSize:15, color:'white', alignSelf:'center'}}>Male | 21</Text>
                    </View>
                    <TouchableOpacity>
                        <FontAwesome name='bars' size={40} color='white'/>  
                    </TouchableOpacity>
                </View>
              
        </SafeAreaView>
        </View>
    )
}