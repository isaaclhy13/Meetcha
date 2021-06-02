import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, Button } from 'react-native'
import { firebase } from '../../config'
import { UserContext } from '../Utils/context'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function TEST() {
    const [user, setUser] = useContext(UserContext);

    return (
        <SafeAreaView style={{ justifyContent: 'center', height: HEIGHT, width: WIDTH }}>
            <TouchableOpacity onPress={() => setUser({ onboard: true })} style={{ width: 100, height: 30, borderWidth: 1 }}>
                <Text>Validate</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}