import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet} from 'react-native'
import Home from '../Pages/Home';
import Notification from '../Pages/Notification';
import Edge from '../Pages/Edge';
import Software from '../Pages/Software';
import Institute from '../Pages/Institute';
import Repairing from '../Pages/Repairing';
import Parts from '../Pages/Parts';
// import * as Linking from 'react-native-linking'
const Stack = createStackNavigator();

export default function Navigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen style={styles.tex} name="     AA + Mobile Repairing and Parts" component={Home} />
                <Stack.Screen name="Notifications" component={Notification} />
                <Stack.Screen name="Edge Master Glass Change"  component={Edge} />
                <Stack.Screen name="          Mobile Software" component={Software} />
                <Stack.Screen name="       Training Institute" component={Institute} />
                <Stack.Screen name="        Repairing Expert" component={Repairing} />
                {/* <Stack.Screen name="Mobile Parts" component={Parts} /> */}
                {/* <Stack.Screen name="Mobile Parts" component={Parts} /> */}
            </Stack.Navigator>
    );
}



const styles = StyleSheet.create({
tex:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
  },
//   Stack.Screen{
//       jus
//   },
})