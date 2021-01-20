import React from 'react';
import {View,Text, Button,StyleSheet,Image,SafeAreaView,ScrollView} from "react-native"

export default function Repairing({navigation}) {
    return (
        <SafeAreaView><ScrollView>
        <View >
            <Image style={{ width: 400, height: 200 }} source={require('../Images/hghg.jpg')}/>
            {/* <Text>Reapairing</Text>
            <Button title="Click me" onPress={()=>navigation.navigate('Home')} /> */}
<View style={styles.main}>
<Text style={styles.text}>Mobile Board Repairing</Text>
<Text style={styles.textss}>Mobile Charging IC repairing</Text>
<Text style={styles.para}>This IC is found in the power section of a mobile Phone; it receives electrical. charges from the phone charger to charge the phone battery which is passed on to power IC after passing through the power and zener diode, resistors and caps for further distribution to other parts in specific values.</Text>
<Image style={{ width: 400, height: 200 }} source={require('../Images/c.jpg')}/>
<Text style={styles.textss}>All Mobile and all IC Rebolaing</Text>
</View>
        </View>
        </ScrollView></SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    main:{
// backgroundColor:"#030333",
    },
    text:{
        fontSize:30,
        // textDecorationStyle:under
        fontStyle:"italic",
        // fontFamily:ar
        color:'#080854',
        // fontStyle:DrawerLayoutAndroid,
        fontWeight:"bold",
        paddingTop:20,
        textAlign:"center",
      },
      textss:{
        fontSize:30,
        // textDecorationStyle:under
        fontStyle:"italic",
        // fontFamily:ar
        color:'#5c5dbf',
        fontWeight:"bold",
        paddingTop:20,
        textAlign:"center",
      },
      textsss:{
        fontSize:15,
        // textDecorationStyle:under
        // fontStyle:"italic",
        // fontFamily:ar
        color:'#093e63',
        fontWeight:"bold",
        // paddingTop:20,
        textAlign:"justify",
      },
      para:{
        alignItems:"center",
        fontWeight:'bold',
            },
            main:{
                padding:10,
           
               },
    })