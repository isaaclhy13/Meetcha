// Creates the specific conversation object, listed in messages.js

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, StyleSheet, Switch, } from 'react-native'
import { ListItem, Avatar, Overlay } from 'react-native-elements'

export default function Message({item}) {

    return (
        <ListItem key={item.name} style={{ backgroundColor: 'orange'}}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
                <Avatar rounded source={{ uri: item.avatar_url }} />
                <ListItem.Content style={{ backgroundColor: 'black' }}>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ color: 'gray' }}>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </TouchableOpacity>
        </ListItem>
    )
}