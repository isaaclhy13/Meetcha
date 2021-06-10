import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button,KeyboardAvoidingView, } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import DraggableFlatList from "react-native-draggable-flatlist";
import { UserContext } from '../Utils/context'
import Picker from 'react-native-picker-select';

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;
var initialData = ([
    {value:1, order:1, },
    {value:2, order:2, },
    {value:3, order:3, },
])


export default function signupPhotoAlbum({navigation, route}) {
    const [user, setUser] = useContext(UserContext);
    const [data, setData] = useState(initialData);
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    const renderItem = ({ item, index, drag, isActive }) => (
        <View style={{width:WIDTH*0.3, height:HEIGHT*0.2, borderRadius:20, justifyContent:'center'}}>
        <TouchableOpacity onPress={pickImage} onLongPress={drag} style={{width:WIDTH*0.275, height:HEIGHT*0.15, borderRadius:20, backgroundColor:'#F2F1F1', 
        justifyContent:'center'}}>
            {(item.order == 1 && image1 != '') ?
            <Image source={{uri:image1}} style={{width:WIDTH*0.275, height:HEIGHT*0.15,borderRadius:20}}/>
            :
            (item.order == 2 && image2 != '') ?
            <Image source={{uri:image2}} style={{width:WIDTH*0.275, height:HEIGHT*0.15,borderRadius:20}}/>
            :
            (item.order == 3 && image3 != '') ?
            <Image source={{uri:image3}} style={{width:WIDTH*0.275, height:HEIGHT*0.15,borderRadius:20}}/>
            :
            <FontAwesome name='plus-circle' color='white' size={30} style={{alignSelf:'center'}}/>
            }
        </TouchableOpacity>
        </View>
    );
    const pickImage = async (number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
            console.log(result.uri)
            if(image1 == '' ){
                setImage1(result.uri)
            }
            else if(image2 == ''){
                setImage2(result.uri)
            }
            else if(image3 == ''){
                setImage3(result.uri)
            }
            
        }
        console.log('Image 1 is : ' + image1);
        console.log('Image 2 is : ' + image2);
        console.log('Image 3 is : ' + image3);

    };
    

    const checkPhotoAlbum = () => {
        // if(image1 != null && image2 != null & image3 != null){
        //     firebase.firestore().collection('users').doc(user.id).update({
        //         photoAlbum: firebase.firestore.FieldValue.arrayUnion(image1),
        //         photoAlbum: firebase.firestore.FieldValue.arrayUnion(image2),
        //         photoAlbum: firebase.firestore.FieldValue.arrayUnion(image3),
        //         onboard : true
        //     })
        // }
        firebase.firestore().collection('users').doc(user.id).update({
            onboard :true
        })
        firebase.firestore().collection('users').doc(user.id).get().then((snapshot) => {
            setUser(snapshot.data())
            console.log(snapshot.data())
        })
    }

    
    
    
    
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


            <View style={{height:HEIGHT*0.4, width:WIDTH, marginTop:HEIGHT*0.03, alignItems:'center', alignContent:'center', justifyContent:'center'}}>

                <DraggableFlatList
                scrollEnabled={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onDragEnd={({ data }) => setData(data)}
                />
           
                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#d4d4d4',}}>Select at least 3 images</Text>

            </View>


            <TouchableOpacity onPress={checkPhotoAlbum} style={{position:'absolute', bottom:HEIGHT*0.05, height:HEIGHT*0.08, width:WIDTH*0.85, borderRadius:40, backgroundColor: (image1 != null && image2 != null && image3 != null ) ? '#e3e3e3' : '#FEC357', alignSelf:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:25, fontFamily:'OpenSans_700Bold', color: 'white', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}
