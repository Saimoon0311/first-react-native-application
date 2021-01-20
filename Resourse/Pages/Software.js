import React from 'react';
import {View,Text, Button,Image,StyleSheet,SafeAreaView,ScrollView} from "react-native"

export default function Software({navigation}) {
    return (
        <SafeAreaView><ScrollView>
        <View>
<Image style={{ width: 400, height: 250 }} source={require('../Images/hsd.jpg')} />
<View style={styles.main}>
    <Text style={styles.text}>All Mobile Software </Text>
    <Text style={styles.texts}>Categories</Text>
    <Text  style={styles.textss}>HardReset (Android)</Text>
    <Text style={styles.para}>Hard Reset: When a device does not function properly, it means the setting in the device needs to be changed, so only that part of the device is reset, or rebooted in the hard reset. It clears all the memory associated with the hardware and updates the hardware with the latest updated version.</Text>
    <Text  style={styles.textss}>Icloud Bypass (IOS)</Text>
    <Text  style={styles.para}>Attempting an iCloud unlock bypass allows Apple fans to get around the Apple activation lock if a phone is lost, stolen, or if a previous user's iCloud account is still linked to the device.</Text>
    <Text style={styles.textss}>FRP Bypass (Android)</Text>
    <Text  style={styles.para}>Factory Reset Protection (FRP) is a security method that was designed to make sure someone can't just wipe and factory reset your phone if you've lost it or it was stolen.</Text>
    <Text  style={styles.textss}>Rooting (Android)</Text>
    <Text style={styles.para}>Rooting is the Android equivalent of jailbreaking, a means of unlocking the operating system so you can install unapproved apps, deleted unwanted bloatware, update the OS, replace the firmware, overclock (or underclock) the processor, customize anything</Text>
    {/* <Text  style={styles.textss}>NG problem solve (Android)</Text> */}
    {/* <Text></Text> */}
    <Text  style={styles.textss}>Flashing (Android & IOS)</Text>
    <Text style={styles.para}>During flashing, users load the new ROM in a manner similar to installing manual updates to the device. This installation is done through a recovery – a dedicated and bootable partition on your smartphone device that can install new updates too your device.</Text>
    <Text  style={styles.textss}>All Keypad mobile unlocking</Text>
    <Text style={styles.para}>Hard Reset: When a device does not function properly, it means the setting in the device needs to be changed, so only that part of the device is reset, or rebooted in the hard reset. It clears all the memory associated with the hardware and updates the hardware with the latest updated version.</Text>
    <Text style={styles.textss}>Country Lock UNlocking</Text>
    <Text style={styles.para}>Unlocking your cell phone lets you switch carriers without buying a new device. All carriers are required to let you do this, as long as you've paid off the phone. Many smartphones can work with any U.S. carrier. You can check your phone's compatibility online.</Text>
    <Text style={styles.textss}>Samsung Shade Removing</Text>
    <Text style={styles.para}>The problem of phone screen bleeding purple can be a result of a hardware error. This issue prevents your Samsung S7 software to function properly, hence the appearance of the purple screen. This also can come from an intense fall to the ground or soaking the device with water.</Text>
    <Text></Text>
</View>
        </View>
        </ScrollView></SafeAreaView>
    )
} 


const styles = StyleSheet.create({
    main:{
     padding:10,

    },
    para:{
alignItems:"center",
fontWeight:'bold',
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
      texts:{
        fontSize:30,
        // textDecorationStyle:under
        fontStyle:"italic",
        // fontFamily:ar
        color:'blue',
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
})