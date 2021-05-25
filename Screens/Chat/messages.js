import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import { ListItem, Avatar, Overlay } from 'react-native-elements'


export default function Messages() {
    const [convos, setConvos] = useState([{
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }])


    return (
        <View style={{ flex: 1, backgroundColor: '#FEC357' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'stretch'}}>
                    <View style={{ height: 80, backgroundColor: '#FEC357', justifyContent: 'center', alignItems: 'stretch' }}>
                        <Text style={{ color: '#fff', marginLeft: 20, fontSize: 30 }}>Messages</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                        {
                            convos.map((item) => (
                                <ListItem key={item.name}>
                                    <TouchableOpacity style={{flex:1}}>
                                        <Avatar rounded source={{ uri: item.avatar_url }} />
                                        <ListItem.Content>
                                            <ListItem.Title>{item.name}</ListItem.Title>
                                            <ListItem.Subtitle style={{ color: 'gray' }}>{item.subtitle}</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron />
                                    </TouchableOpacity>
                                </ListItem>
                            ))
                        }
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}