import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import firebase from '../../config'
import { UserContext } from '../Utils/context'


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function connectFilter({navigation}){
    const [user, setUser] = useContext(UserContext);
    const [filterGender, setFilterGender] = useState('All')
    const [filterDistance, setFilterDistance] = useState(10)
    const [filterAge, setFulterAge] = useState([18, 70])
    const changeFilterAge = (values) => setFulterAge(values)

    const setFilters = () => {
        // firebase.firestore().collection('users').doc(user.id).update({
        //     filterGender: filterGender,
        //     filterDistance: filterDistance,
        //     filterAge: filterAge[0] + ':' + filterAge[1]
        // })
        navigation.goBack()
    }
  

    return(
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center',borderColor:'#e0e0e0',
            borderBottomWidth: 0.5, paddingBottom:HEIGHT*0.02, backgroundColor:'white'}}>
                <Text style={{fontSize:20, fontFamily:'OpenSans_600SemiBold', color: '#FEC357', marginTop:HEIGHT*0.01}}>Filter</Text>
            </View>
            <View style={{height:HEIGHT*0.15, width:WIDTH, marginTop: HEIGHT*0.05,}}>
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
            <View style={{height:HEIGHT*0.13, width:WIDTH, marginTop: HEIGHT*0.05, }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, fontFamily:'OpenSans_600SemiBold', color:'#545454', paddingLeft:WIDTH*0.1}}>Distance</Text>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_600SemiBold', color:'#cccccc',paddingRight:WIDTH*0.1}}>Up to {parseInt(filterDistance)} km away</Text>
                </View>
                <Slider
                style={{width: WIDTH*0.8, height: HEIGHT*0.05, alignSelf:'center',  marginTop:HEIGHT*0.02}}
                onValueChange ={(value)=> setFilterDistance(value)}
                value = {filterDistance}
                minimumValue={0}
                maximumValue={50}
                minimumTrackTintColor="#FEC357"
                maximumTrackTintColor="#000000"
                />
            </View>
            <View style={{height:HEIGHT*0.15, width:WIDTH, marginTop: HEIGHT*0.05, }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, fontFamily:'OpenSans_600SemiBold', color:'#545454', paddingLeft:WIDTH*0.1}}>Age</Text>
                    <Text style={{fontSize:15, fontFamily:'OpenSans_600SemiBold', color:'#cccccc',paddingRight:WIDTH*0.1}}>{filterAge[0]} to {filterAge[1]}</Text>
                </View>
                <View style={{alignSelf:'center', marginTop:HEIGHT*0.02}}>
                <MultiSlider
                selectedStyle={{
                    backgroundColor: '#ffc559'
                }}
                trackStyle={{
                    height: 4, borderRadius: 15, backgroundColor: 'black'
                }}
               
                markerStyle={{
                    backgroundColor: 'white',
                    borderWidth: 0,
                    height: Dimensions.get('window').height * 0.03,
                    width: Dimensions.get('window').height * 0.03,
                    borderRadius: Dimensions.get('window').height * 0.015,
                    shadowOpacity: 0.3,
                    shadowColor: '#545454',
                    shadowRadius:5,
                    marginTop: 5,
                    }}
                    values={[filterAge[0], filterAge[1]]}
                    sliderLength={WIDTH*0.75}
                    onValuesChange={changeFilterAge}
                    min={18}
                    max={70}
                    allowOverlap={false}
                   
            />
            </View>
                
                
            </View>

            <View style={{height:HEIGHT*0.2, width:WIDTH, marginTop: HEIGHT*0.05,}}>
                </View>
            <TouchableOpacity onPress={setFilters} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Done</Text>
            </TouchableOpacity>

        </SafeAreaView>             
    )
}

const styles = StyleSheet.create({
    root: {
      width: 14 * 2,
      height: 14 * 2,
      borderRadius: 14,
      backgroundColor: '#ffffff',
      shadowOffset: {width:0, height:0},
      shadowColor: '#545454',
      shadowRadius:4,
      shadowOpacity: 0.1
    },
    rail: {
        width: WIDTH*0.8,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'black',
       
      },
      railSelected: {
        height: 4,
        backgroundColor: '#FEC357',
        borderRadius: 2,
      },
    });
  