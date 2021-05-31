import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { Avatar } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export default function Conversation({ route, navigation }) {
    const [data, setData] = useState(route.params.data)
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState([])

    // useEffect(() => {setData(route.params.data); console.log(route.params.data)})

    return (
        <View style={{ flex: 1, backgroundColor: '#FEC357' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ height: HEIGHT * 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FEC357', padding: 10 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome name='sign-out' size={35} color='#fff' style={{ transform: [{ rotateY: '180deg' }] }} />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Avatar rounded size="medium" source={{ uri: data.avatar_url }} />
                            <Text style={{ marginLeft: 10, color: '#fff', fontSize: 30, fontFamily: 'OpenSans_700Bold' }}>{data.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='info-circle' size={35} color='#fff' style={{}} />
                        </TouchableOpacity>
                    </View>

                    <GiftedChat
                        messages={messages}
                        onSend={messages => { }}
                        user={{ _id: user.id, name: user.userName, avatar: user.profilePic }}
                        bottomOffset={80}
                    />
                </View>
            </SafeAreaView>
        </View >
    )
}