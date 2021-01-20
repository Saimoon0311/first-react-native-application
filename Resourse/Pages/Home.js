// import { StatusBar } from 'expo-status-bar';
// import { StyleProvider } from 'native-base';
import React from 'react';
import {  StyleSheet,SafeAreaView,ScrollView, Text, View ,ColorValue,Image,Button,Linking} from 'react-native';
import { shouldUseActivityState } from 'react-native-screens';
import { linear } from 'react-native/Libraries/Animated/src/Easing';
// import { floor } from 'react-native-reanimated';
// import CardShowcaseExample from './assets/card';
// import Hoverable from "./Hoverable";
export default function Home({navigation}) {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.maintain}>
    {/* <View style={styles.container}>
      <Text style={styles.tex}>AA + Mobile Repairing Institute</Text>
      
      </View> */}
    <View style={styles.containert}>
    <Image style={{ width: 400, height: 200 }} source={require('../Images/2020-04-22.jpg')} />
    </View>
    <View style={styles.imgs}>
      <Text style={styles.text}>Our Services</Text>


 
      {/* <Image style={{ width: 150, height: 150 }} source={require('./iphone.png')} />
      <Image style={{ width: 150, height: 150 }} source={require('./samsung.jpg')} /> */}
      <View style={styles.main}>
            <View style={styles.maint}>
            <Image style={{ width: 300, height: 150 }} source={require('../Images/hqdefault.jpg')} />
                  <Text></Text>
                  <Button title="Edge Master Glass Change" onPress={ ()=>navigation.navigate('Edge Master Glass Change')} style={styles.tnt} />
            </View>
            <View style={styles.maint}>
            <Image style={{ width: 300, height: 150 }} source={require('../Images/fonearena_0031.jpg')} />
            <Text></Text>
            <Button title="Repairing Expert" onPress={()=>navigation.navigate('        Repairing Expert')} style={styles.tnt} />
            </View>
            <View style={styles.maint}>
            <Image style={{ width: 300, height: 150 }} source={require('../Images/h.jpg')} />
            <Text></Text>
            <Button title="Training Institute" onPress={()=>navigation.navigate('       Training Institute')} style={styles.tnt} />
            </View>
            <View style={styles.maint}> 
            <Image style={{ width: 300, height: 150 }} source={require('../Images/maxresdefault.jpg')} />
            <Text></Text>
            <Button title="Mobile Software" onPress={()=>navigation.navigate('          Mobile Software')} style={styles.tnt} />
            </View>
            {/* <View style={styles.maint} > */}
            {/* <Image style={{ width: 300, height: 150 }} source={require('../Images/f.jpg')} />
            <Text></Text>
            <Button title="Mobile Parts" onPress={()=>navigation.navigate('Mobile Parts')} style={styles.tnt} /> */}
            {/* <Text onPress={()=>navigation.navigate('Mobile Parts')} style={styles.tnt}> Mobile Parts </Text>0 */}
            {/* </View>      */}
    </View> 

    </View>
    <View style={styles.contact}>
    <Text style={styles.tnts}>
        For Contact Us 
    </Text>
    <Image style={{ width: 300, height: 400 }} source={require('../Images/mnmn.jpg')} />
    <Text></Text>
    {/* <Text></Text> */}
    <Button style={styles.btns} title='Contact on Whatapp' onPress={ ()=> Linking.openURL('https://wa.link/4wyef5') } />
    
    {/* <Linking supportedURL='https://wa.link/md1rgo' /> */}
    <Text></Text>
</View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maintain:{
// backgroundColor:'#353d36',
  },
  container: {
    // flex: 0,
    height:60,
    alignItems: 'center',
    backgroundColor:'#07033d',
    marginTop:20,
    // color:'white',

    justifyContent: 'center',
  },
  tex:{
    fontSize:20,
    color:'#353d36',
    fontWeight:'bold',
  },
  containert: {
    // flex: ,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // marginTop:'10',
    // justifyContent: 'center',
  },
  text:{
    fontSize:50,
    // textDecorationStyle:under
    fontStyle:"italic",
    // fontFamily:ar
    color:'#353d36',
    fontWeight:"bold",
    paddingTop:60,
    textAlign:"center",
  },
maint:{
  // flex: 2,
  alignItems:'center',
  marginTop:60,
  // borderColor:'black',
  // borderRadius:1 ,
  // fontSize:40,

},
// maintHoverable:{
// borderRadius:2,
// },
tnt:{
  fontSize:20,
  color:'#353d36',
  fontWeight:'bold',
  borderRadius:50,
  borderColor:'black',
  
},
tnts:{
    fontSize:40,
    color:'#353d36',
    marginBottom:20,
    fontWeight:'bold',
  },
mainl:{
  marginBottom:2,
},
contact:{
    marginTop:60,
    alignItems:'center',
},
bnt:{
    paddingTop:60,
},
btns:{
  fontWeight:'bold',
  width:10,
  color:"red"
}
});