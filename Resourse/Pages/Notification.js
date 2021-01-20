import React from 'react';
import {View,Text, Button} from "react-native"

export default function Notification({navigation}) {
    return (
        <View>
            <Text>Notification Component</Text>
            <Button title="Click me" onPress={()=>navigation.navigate('Home')} />

        </View>
    )
} 