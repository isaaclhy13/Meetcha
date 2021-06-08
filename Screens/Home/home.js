import React, { useState, useContext, useEffect, useCallback, useRef, useImperativeHandle } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { UserContext } from '../Utils/context'
import { firebase } from '../../config'



var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default function home({ navigation }) {
  //Timer 
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    var interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(time => time + 1)
      }, 1000)
    }
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timerOn])

  const connectY = useState(new Animated.Value(0))[0]; //Up and down animation of the connect View 
  const connectSize = useState(new Animated.Value(1))[0]; //The size scaling animation of the Connect View 
  const searchingTextOpacity = useState(new Animated.Value(0))[0];  //The opacity of the view Containing 'Seaching...' and stopWatch
  const [connect, setConnet] = useState(false); //false if user haven't connect 
  const connectAnim = () => {
    if (connect == false) {
      Animated.parallel([
        Animated.spring(connectY, {
          toValue: HEIGHT * 0.6,
          duration: 300,
          useNativeDriver: false
        }),
        Animated.timing(connectSize, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(searchingTextOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true
        })
      ]).start()
      setConnet(true);
      setTimerOn(true);
    }
    else {
      Animated.parallel([
        Animated.timing(connectY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }),
        Animated.timing(connectSize, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(searchingTextOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true
        })
      ]).start()

      //Reset Timer 
      setConnet(false);
      setTimerOn(false);
      setTime(0);
    }
  }

  useEffect(() => {
    return function cleanup() {
      console.log('cleanup')
      firebase.firestore().collection('connect').doc(user.id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  }, [])

  const connectDatabase = () => {
    const connectRef = firebase.firestore().collection('connect')

    connectRef
      .doc(user.id).set({
        id: user.id,
        date: new Date()
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  const logout = async () => {
    firebase.auth().signOut()
    setUser(null)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View style={{ width: 200, height: 200, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                <Text>You matched with... </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity onPress={logout} style={{ position: 'absolute', top: 0, width: WIDTH, height: HEIGHT * 0.1, justifyContent: 'center' }}>
          <FontAwesome name='bars' size={30} color='#FEC357' style={{ alignSelf: 'flex-end', marginRight: WIDTH * 0.1 }} />
        </TouchableOpacity>


        <Animated.View style={{ position: 'absolute', alignSelf: 'center', alignItems: 'center', opacity: searchingTextOpacity }}>
          <Animatable.Text useNativeDriver={true} animation='pulse' direction="alternate" easing='ease-in-out' iterationCount={'infinite'} duration={1000}
            style={{ fontSize: 30, color: '#FEC357', fontFamily: 'OpenSans_700Bold' }}>Searching...
            </Animatable.Text>
          <Text style={{ fontSize: 20, color: '#FEC357', fontFamily: 'OpenSans_400Regular' }}>{Math.floor(parseInt(time / 60).toFixed(0))}:{(Math.floor(parseInt(time / 10))) % 6}{parseInt(time % 10)}</Text>
        </Animated.View>


        <Animated.View style={{ height: 140, width: 140, marginTop: connectY, alignSelf: 'center' }} >
          <TouchableOpacity activeOpacity={0.7} onPress={() => { connectAnim(); connectDatabase() }} style={[{ transform: [{ scale: connectSize, }] }, { backgroundColor: connect ? '#E0E0E0' : '#FEC357', height: 140, width: 140, borderRadius: 70, justifyContent: 'center', alignItems: 'center', }]}>
            {connect ?
              <FontAwesome name='times' size={70} color={'white'} />
              :
              <Text style={{ fontSize: 25, color: 'white', fontFamily: 'OpenSans_700Bold' }}>Connect</Text>
            }
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
