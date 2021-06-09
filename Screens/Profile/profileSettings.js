import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, FlatList, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function profileSettings({navigation,route }) {
    const [user, setUser] = useContext(UserContext);
   
    const settings = ([
        {name:'Change Password', icon:'lock'},
        {name:'Privacy', icon:'shield'},
        {name:'Logout', icon:'times'}
    ])

    const selectSettings = (name) => {
        if (name == 'Change Password'){
            navigation.navigate('changePassword')
        }
        if (name =='Logout'){
            setUser(null)
        }
    }
   

   
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center',borderColor:'#e0e0e0',
            borderBottomWidth: 0.5, paddingBottom:HEIGHT*0.02}}>
                <Text style={{fontSize:20, fontFamily:'OpenSans_600SemiBold',marginTop:HEIGHT*0.01, }}>Settings</Text>
            </View>
            <View style={{width:WIDTH, height:HEIGHT*0.6, backgroundColor:'white', borderRadius:25, alignItems:'center'}}>
                        <FlatList
                        data={settings}
                        keyExtractor={()=> Math.random()*100}
                        style={{ paddingLeft:WIDTH*0.04,paddingRight:WIDTH*0.04}}
                        renderItem = {({item})=>(
                            <TouchableOpacity onPress={()=>selectSettings(item.name)} style={{width:WIDTH*0.92, height:HEIGHT*0.07,borderBottomWidth:0.5,  borderBottomColor:'#e0e0e0', flexDirection:'row', alignItems:'center' }}>
                                <FontAwesome name={item.icon} color='#e0e0e0' size={30} />
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:15, marginLeft:WIDTH*0.075}}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                         />
                    </View>
            

           
           
        </SafeAreaView>
    )
}