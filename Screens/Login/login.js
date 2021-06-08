import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button, KeyboardAvoidingView, Keyboard } from 'react-native'
import { firebase } from '../../config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function login({ navigation }) {
    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((doc) => {
                        setUser(doc.data())
                    })
            }
        });
    })

    const onLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        Keyboard.dismiss()
                        setUser(firestoreDocument.data())
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <SafeAreaView style={{ height: HEIGHT, width: WIDTH, backgroundColor: '#FEC357' }}>
            <LinearGradient colors={['rgba(255,211,130,1)', 'rgba(254,195,87,1)', 'rgba(254,195,87,1)']} style={styles.gradient}>
                <View style={{ height: HEIGHT * 0.1, width: WIDTH, justifyContent: 'center', paddingLeft: WIDTH * 0.05 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome name='angle-left' size={40} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={{ width: WIDTH, height: HEIGHT * 0.3, paddingLeft: WIDTH * 0.1, }}>
                    <Text style={{ fontSize: 35, fontFamily: 'OpenSans_700Bold', color: 'white' }}>Welcome back!</Text>
                    <TextInput placeholder='Email' autoFocus={true} onChangeText={(value) => setEmail(value)} value={email} style={{
                        height: HEIGHT * 0.065, width: WIDTH * 0.8, borderRadius: 40,
                        backgroundColor: 'white', borderWidth: 2, borderColor: '#E0E0E0', marginTop: HEIGHT * 0.05, paddingLeft: WIDTH * 0.05
                    }} />
                    <TextInput placeholder='Password' onChangeText={(value) => setPassword(value)} value={password} style={{
                        height: HEIGHT * 0.065, width: WIDTH * 0.8, borderRadius: 40,
                        backgroundColor: 'white', borderWidth: 2, borderColor: '#E0E0E0', marginTop: HEIGHT * 0.02, paddingLeft: WIDTH * 0.05
                    }} />
                </View>
                <TouchableOpacity disabled={(email == '' || password == '') ? true : false} onPress={onLogin} style={{
                    height: HEIGHT * 0.08, width: WIDTH * 0.85,
                    borderRadius: 40, backgroundColor: (email == '' || password == '') ? '#F5F5F5' : 'white', alignSelf: 'center', justifyContent: 'center', marginTop: HEIGHT * 0.05
                }}>
                    <Text style={{ fontSize: 25, fontFamily: 'OpenSans_700Bold', color: (email == '' || password == '') ? 'white' : '#FEC357', alignSelf: 'center' }}>Login</Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        height: HEIGHT,
        width: WIDTH,
        alignItems: 'center',
        paddingTop: HEIGHT * 0.05
    }
})
