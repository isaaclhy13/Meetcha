import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function connectFilter({navigation}){
    const [filterGender, setFilterGender] = useState('All')
    return(
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center',borderColor:'#e0e0e0',
            borderBottomWidth: 0.5, paddingBottom:HEIGHT*0.02, backgroundColor:'white'}}>
                <Text style={{fontSize:20, fontFamily:'OpenSans_600SemiBold', color: '#FEC357', marginTop:HEIGHT*0.01}}>Filter</Text>
            </View>
            <View style={{height:HEIGHT*0.2, width:WIDTH, marginTop: HEIGHT*0.05,}}>
                <Text style={{fontSize:18, fontFamily:'OpenSans_600SemiBold', color:'#545454', paddingLeft:WIDTH*0.1}}>Gender</Text>
                <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:HEIGHT*0.02}}>
                    <TouchableOpacity onPress={()=> setFilterGender('Male')} style={{height:HEIGHT*0.1, width:WIDTH*0.2, borderRadius:30, backgroundColor: filterGender == 'Male' ? '#FEC357' : '#E3E3E3', justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', color:'white'}}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setFilterGender('Female')} style={{height:HEIGHT*0.1, width:WIDTH*0.2, borderRadius:30, backgroundColor: filterGender == 'Female' ? '#FEC357' : '#E3E3E3', justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', color:'white'}}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setFilterGender('All')} style={{height:HEIGHT*0.1, width:WIDTH*0.2, borderRadius:30, backgroundColor: filterGender == 'All' ? '#FEC357' :  '#E3E3E3', justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', color:'white'}}>All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Done</Text>
            </TouchableOpacity>

        </SafeAreaView>             
    )
}