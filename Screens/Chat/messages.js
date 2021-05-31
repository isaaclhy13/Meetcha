// Creates the messaging page, which lists all the conversations the user is having.

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, FlatList } from 'react-native'
import { ListItem, Avatar, Overlay } from 'react-native-elements'

//import Message from './message'

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

function Message({item}) {

    return (
        <ListItem key={item.name} style={{ backgroundColor: 'orange'}}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                <Avatar rounded size="medium" containerStyle={{marginRight: 10}} source={{ uri: item.avatar_url }}/>
                <ListItem.Content style={{}}>
                    <ListItem.Title style={{fontWeight: 'bold'}}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ color: 'gray' }}>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </TouchableOpacity>
        </ListItem>
    )
}

export default function Messages() {
    const [convos, setConvos] = useState([{
        name: 'Amy Farha',
        avatar_url: 'https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/neutral-face.png',
        subtitle: 'Vice Chairman'
    }])


    return (
        <View style={{ flex: 1, backgroundColor: '#FEC357' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'stretch' }}>
                    <View style={{ height: HEIGHT * 0.1, backgroundColor: '#FEC357', justifyContent: 'center', alignItems: 'stretch' }}>
                        <Text style={{ color: '#fff', marginLeft: WIDTH * 0.05, fontSize: 30, fontFamily: 'OpenSans_700Bold' }}>Messages</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <FlatList
                            keyExtractor={(item, index) => index}
                            data={convos}
                            renderItem={Message}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}