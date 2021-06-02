import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button } from 'react-native'
import { firebase } from '../../config'
import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;
export default function signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useContext(UserContext);

    const onSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    onboard: false,
                    profilePic: null,
                    available: false,
                    profileAlbum: [],
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        setUser(data);
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }
    return (
        <SafeAreaView style={{ justifyContent: 'center', height: HEIGHT, width: WIDTH }}>

            <TextInput
                placeholder='Email'
                placeholderTextColor="#aaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={styles.input}
                color={'black'}

            />
            <TextInput
                placeholder='Password'
                placeholderTextColor="#aaa"
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={styles.input}
                color={'black'}

            />
            <TouchableOpacity onPress={onSignUp} style={{ width: 100, height: 30, borderWidth: 1 }}>
                <Text>Sign up</Text>
            </TouchableOpacity>



        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    searchSection: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        backgroundColor: '#fff',
        //borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10
    },
    searchIcon: {
        padding: 5
    },
    input: {
        fontSize: 20,
        color: '#aaa',

        borderWidth: 1,
        width: 300,
        height: 30

    },

    login: {

    },

    sign: {
        color: '#aaa',
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'center'
    }
})

