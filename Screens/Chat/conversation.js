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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ height: HEIGHT * 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth:0.5, borderColor:'#e0e0e0' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome name='sign-out' size={30} color='black' style={{ transform: [{ rotateY: '180deg' }] }} />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Avatar rounded size="medium" source={{ uri: data.avatar_url }} />
                            <Text style={{ marginLeft: 10, color: 'black', fontSize: 25, fontFamily: 'Cabin_600SemiBold' }}>{data.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='info-circle' size={30} color='#e0e0e0' style={{}} />
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