import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screen/home';
import Edge from '../screen/edge';
import Repairing from '../screen/repairing';
import Institute from '../screen/institute';
import Software from '../screen/software';
// import Notification from '../screen/edge';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Edge" component={Edge} />
                <Stack.Screen name="Repairing" component={Repairing} />
                <Stack.Screen name="Institute" component={Institute} />
                <Stack.Screen name="Software" component={Software} />
            </Stack.Navigator>
    );
}