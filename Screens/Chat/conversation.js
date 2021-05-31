import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Conversation() {
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState([]) 

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => {}}
                        user={{ _id: user.id, name: user.userName, avatar: user.profilePic }}
                        bottomOffset= {80}
                    />
                </View>
            </SafeAreaView>
        </View >
    )
}