import React from 'react';
import {View,Text, Button,ScrollView,SafeAreaView,Image,StyleSheet} from "react-native"

export default function Parts({navigation}) {
    return (
        <SafeAreaView><ScrollView>
        <View>
        <Image style={{ width: 400, height: 200 }} source={require('../Images/f.jpg')} />
            <Text  style={styles.text}>All types Mobie Parts Available</Text>
          <Text  style={styles.texts}>Categories</Text>        
<View>
    
<Text  style={styles.textss}>Samsung Note 10</Text>
<Image style={{ width: 400, height: 200 }} source={require('../Images/asa.jpg')} />
<Text  style={styles.textss}>Samsung S 20 Ultra</Text>
<Text  style={styles.textss}>Samsung S 10  Plus</Text>
<Text  style={styles.textss}>Iphone 12</Text>
<Text  style={styles.textss}>Iphone XS Max</Text>
<Text  style={styles.textss}>Iphone X</Text>
{/* <Text>Samsung Note 10</Text> */}
</View>
        </View>
        </ScrollView></SafeAreaView>
    )
} 

const styles = StyleSheet.create({

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