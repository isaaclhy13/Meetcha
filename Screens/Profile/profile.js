import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';




var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


export default function profile(){
    const [editModal, setEditModal] = useState();
    const [profileSettingsModal, setProfileSettingsModal] = useState();

    const settings = ([
        {name:'Change Password', icon:'lock'},
        {name:'Privacy', icon:'shield'},
        {name:'Logout', icon:'times'}
    ])

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
                    <TouchableOpacity onPress={()=> setEditModal(true)}>
                        <FontAwesome name='edit' size={40} color='white'/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontFamily:'OpenSans_700Bold', fontSize:30, color:'white', alignSelf:'center'}}>Isaac</Text>
                        <Text style={{fontFamily:'OpenSans_400Regular', fontSize:15, color:'white', alignSelf:'center'}}>Male | 21</Text>
                    </View>
                    <TouchableOpacity onPress={()=>setProfileSettingsModal(true)}>
                        <FontAwesome name='bars' size={40} color='#0fff23'/>  
                    </TouchableOpacity>
                </View>

                <Modal hasBackdrop={true} backdropOpacity={0.8} isVisible={editModal} animationInTiminG={200} style={{height:HEIGHT, width:WIDTH, margin: 0}}>
                    <View style={{width:WIDTH, height:HEIGHT*0.9, backgroundColor:'white', borderRadius:25, alignItems:'center',position:'absolute',bottom:0}}>
                        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:WIDTH, alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>setEditModal(false)} style={{marginTop:HEIGHT*0.02}}>
                                <Text style={{fontSize:15, fontFamily:'OpenSans_400Regular', color:'#545454'}}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:20, fontFamily:'OpenSans_700Bold', color:'#FEC357',marginTop:HEIGHT*0.02}}>Edit Profile</Text>
                            <Text style={{fontSize:15, fontFamily:'OpenSans_700Bold', color:'#FEC357',marginTop:HEIGHT*0.02}}>Done</Text>
                        </View>
                        <View  style={{ marginTop: HEIGHT* 0.03, width:WIDTH*0.9*0.9, height: HEIGHT*0.25, borderWidth:1, borderRadius:20}}>
                        {/**
                         * Images here
                         */}
                        </View>
                        <View style={{width:WIDTH*0.8, marginTop:HEIGHT*0.02, borderWidth:0.5, borderColor:'#e0e0e0'}} />
                        <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.03, flexDirection:'row'}}>
                            <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center'}}>
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:18}}>First Name</Text>
                            </View>
                            <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                                    <TextInput value='Isaac'  multiline={false} style={{paddingLeft:WIDTH*0.05, flex:1}} textAlign='left' />
                                </View>
                            </View>
                        </View>

                        <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.02, flexDirection:'row'}}>
                            <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center',}}>
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:18}}>Last Name</Text>
                            </View>
                            <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                                    <TextInput value='Lee' style={{paddingLeft:WIDTH*0.05, flex:1}} textAlign='left' />
                                </View>
                            </View>
                        </View>

                        <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.02, flexDirection:'row'}}>
                            <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center',}}>
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:18}}>Age</Text>
                            </View>
                            <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                                
                                </View>
                            </View>
                        </View>
                        <View style={{height:HEIGHT*0.035,width:WIDTH*0.8, marginTop:HEIGHT*0.02, flexDirection:'row'}}>
                            <View style={{height:HEIGHT*0.035,width:WIDTH*0.3, alignItems:'flex-start',justifyContent:'center',}}>
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:18}}>About me </Text>
                            </View>
                            <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, marginLeft:WIDTH*0.1,alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{height:HEIGHT*0.035, width:WIDTH*0.4, borderRadius:20, borderWidth:1, borderColor:'#e0e0e0'}}>
                                
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal swipeDirection='down' onSwipeComplete={()=> setProfileSettingsModal(false)} hasBackdrop={true} backdropOpacity={0.8} isVisible={profileSettingsModal} animationInTiminG={200} style={{height:HEIGHT, width:WIDTH, margin: 0}}>
                    <TouchableOpacity onPress={()=> setProfileSettingsModal(false)} style={{width:WIDTH, height:HEIGHT*0.4, }}>

                    </TouchableOpacity>
                    <View style={{width:WIDTH, height:HEIGHT*0.6, backgroundColor:'white', borderRadius:25, alignItems:'center'}}>
                        <FlatList
                        data={settings}
                        keyExtractor={()=> Math.random()*100}
                        style={{paddingTop:HEIGHT*0.02, paddingLeft:WIDTH*0.04,paddingRight:WIDTH*0.04}}
                        renderItem = {({item})=>(
                            <TouchableOpacity style={{width:WIDTH*0.92, height:HEIGHT*0.06,borderBottomWidth:0.5,  borderBottomColor:'#e0e0e0', flexDirection:'row', alignItems:'center' }}>
                                <FontAwesome name={item.icon} color='#e0e0e0' size={30} />
                                <Text style={{fontFamily:'OpenSans_400Regular', color:'#545454', fontSize:15, marginLeft:WIDTH*0.075}}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                         />
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}