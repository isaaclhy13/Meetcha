import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';



import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function signupPhotoAlbum({navigation, route}) {
    const [user, setUser] = useContext(UserContext);
    const [photoAlbum, setPhotoAlbum] = useState('f');

    useEffect(()=>{
        firebase.firestore().collection('users').doc(user.id).update({
            onboard : true
        }) 
    })

    const checkPhotoAlbum = () => {
        firebase.firestore().collection('users').doc(user.id).update({
            onboard : true
        })
       
    }

    const data = ([
        {value:'1'},
        {value:'2'},
        {value:'3'},
        {value:'4'},
        {value:'5'},
        {value:'6'},
    ])
    
    
    return (
        <SafeAreaView style={{height: HEIGHT, width: WIDTH, backgroundColor:'white' }}>
           
            <View style={{ height:HEIGHT*0.1,width:WIDTH,justifyContent:'center', paddingLeft:WIDTH*0.05}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesome name='angle-left' size={40} color='#545454' />
                </TouchableOpacity>
            </View>
            <View style={{ width:WIDTH, height:HEIGHT*0.2,paddingLeft:WIDTH*0.1, }}>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>Select my </Text>
                <Text style={{fontSize:30, fontFamily:'OpenSans_600SemiBold'}}>Photo Album</Text>      
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454', marginTop:HEIGHT*0.01}}>Let people know what you like to do,</Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>eat and even your favorite </Text>
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>vacation spots.</Text> 
            </View>


            <View style={{height:HEIGHT*0.4, width:WIDTH, marginTop:HEIGHT*0.03, alignItems:'center', alignContent:'center'}}>
           
                {/* <FlatList
                data={data}
                keyExtractor ={(value,)=> Math.random()*100}
                numColumns = {3}
                renderItem = {(item, index)=>(
                    <TouchableOpacity style={{width:WIDTH*0.275, height:HEIGHT*0.15, borderRadius:20, backgroundColor:'#F2F1F1', 
                    marginLeft: index%3 ==0 ? 0 :WIDTH*0.02, marginTop: index%3 ==0 ? 0 :WIDTH*0.03, justifyContent:'center'}}>
                        <FontAwesome name='plus-circle' color='white' size={30} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                )}
                /> */}
            <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#d4d4d4',}}>Select at least 3 images</Text>

            </View>


            <TouchableOpacity disabled={photoAlbum == '' ? true : false} onPress={checkPhotoAlbum} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: photoAlbum == '' ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}