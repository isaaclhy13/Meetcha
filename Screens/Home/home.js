import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import TouchableScale from 'react-native-touchable-scale';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function home(){
    const connectY = useState(new Animated.Value(0))[0];
    const connectSize = useState(new Animated.Value(1))[0];
    const searchingTextOpacity = useState(new Animated.Value(1))[0];
    const [connect, setConnet] = useState(false);
    const connectAnim = () =>{
      if(connect == false){
        Animated.parallel([
          Animated.spring(connectY,{
            toValue: HEIGHT*0.6,
            duration:300,
            useNativeDriver: false
          }),
          Animated.timing(connectSize,{
            toValue:0.5,
            duration:300,
            useNativeDriver: true
          }),
          Animated.timing(searchingTextOpacity,{
            toValue:1,
            duration:250,
            useNativeDriver: true
          })
        
        ]).start()
        setConnet(true);
      }
      else{
        Animated.parallel([
          Animated.timing(connectY,{
            toValue: 0,
            duration:300,
            useNativeDriver: false
          }),
          Animated.timing(connectSize,{
            toValue:1,
            duration:300,
            useNativeDriver: true
          }),
          Animated.timing(searchingTextOpacity,{
            toValue:0,
            duration:150,
            useNativeDriver: true
          })
        ]).start()
        setConnet(false);
      }
    } 
  
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={{ flex: 1, justifyContent:'center'}}>
          <View style={{position:'absolute',top:0, width:WIDTH, height:HEIGHT*0.1, justifyContent:'center'}}>
            <FontAwesome name = 'bars' size={30} color='#FEC357'style={{alignSelf:'flex-end', marginRight:WIDTH*0.1}}/>
          </View>
        
           
            <Animated.Text style={{fontSize:25, color:'#FEC357', fontFamily:'OpenSans_700Bold', position:'absolute', alignSelf:'center',opacity: searchingTextOpacity}}>Searching...</Animated.Text>
            
           
           
            <Animated.View  style={{height:140, width:140, marginTop: connectY, alignSelf:'center'}} >
            <TouchableOpacity  activeOpacity={0.7} onPress={connectAnim} style={[{transform:[{scale:connectSize,} ]}, {backgroundColor: connect ? '#E0E0E0' :'#FEC357',height:140, width:140,borderRadius:70,justifyContent:'center', alignItems:'center',}]}>
              {connect ?
                <FontAwesome name='times' size={70} color={'white'} />
                :
                <Text style={{fontSize:25, color:'white', fontFamily:'OpenSans_700Bold'}}>Conenect</Text>
              }
            </TouchableOpacity>
            </Animated.View>
           
        </View>
      </SafeAreaView>
      );
}