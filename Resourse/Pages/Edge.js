import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text, Button,Image, DrawerLayoutAndroid} from "react-native"

export default function Edge({navigation}) {
    return (
<SafeAreaView >
    <ScrollView>
        <View>
            {/* <Text>Edge</Text> */}
            {/* <Button title="Click me" onPress={()=>navigation.navigate('Home')} /> */}
            <Image style={{ width: 400, height: 200 }} source={require('../Images/m.jpg')} />
          <View style={styles.main}>
               <View  >
                   <Text style={styles.text}>All Type of Glass Change</Text>
                   <Text style={styles.texts}>Categories</Text>

               </View>
               <View>
                   <Text style={styles.textss}>TFT LCD</Text>
                   <Text style={styles.textsss}>TFT stands for Thin Film Transistor technology. TFT LCDs are the most common type of display units used across mobile phones. TFT LCD offer better image quality and higher resolutions compared to earlier generation LCD displays but their limitation lies in narrow viewing angles and poor visibility in direct light or sunlight.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>IPS-LCD</Text>
                   <Text style={styles.textsss}>IPS stands for In-Place Switching. If you compare TFT vs IPS, then IPS LCDs are superior to normal TFT LCD displays with wider viewing angles and lower power consumption which leads to a much improved battery life. IPS-LCDs are costlier than normal TFT LCD and hence are found only on higher end smartphones. A higher resolution (640 x 960 pixels) version of IPS LCD is used in Apple iPhone 4 and is called Retina Display because of its brilliant picture quality.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Resistive Touchscreen LCD</Text>
                   <Text style={styles.textsss}>Touchscreen LCD displays are of two types – Resistive and Capacitive. Resistive touchscreens contain two layer of conductive material with a very small gap between them which acts as a resistance. When the resistive touchscreen is touched with finger (or stylus) the two layers meet at the point of touch thus making a circuit at the point of touch. This information is recognized by the mobile’s processor / chip and passed on to the mobile’s OS there by triggering and event / action at the point of touch.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Capacitive Touchsceen LCD</Text>
                   <Text style={styles.textsss}>Capacitive touchscreen technology consists of a layer of glass coated with a transparent conductor (like indium tin oxide). When a capacitive touchscreen is touched by human body (finger), an interruption is created in the screens electrostatic field (which is measurable as a change in capacitance) which is detected by phone’s processor or chip and which in turn instructs phone’s operating system to trigger and event or action accordingly.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>OLED</Text>
                   <Text style={styles.textsss}>OLED stands for Organic Light Emitting Diode and is a newer technology for type of displays of mobiles and monitors. In OLED technology a layer of organic material (carbon based) is sandwiched between two conducting sheets (an anode and a cathode), which in turn are sandwiched between a glass top plate (seal) and a glass bottom plate (substrate). When electric pulse is applied the two conducting sheets, electro-luminescent light is produced directly from the organic material sandwiched between. Brightness and color can vary depending on the electric pulse.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>AMOLED</Text>
                   <Text style={styles.textsss}>AMOLED stands for Active-Matrix Organic Light-Emitting Diode. AMOLED displays are a type of OLED displays for mobiles and are rapidly gaining popularity in top end smartphone segment. AMOLED screens have all the attributes of an OLED display like brilliant color reproduction, light weight, better battery life, higher brightness and sharpness and light weight designs.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Super AMOLED</Text>
                   <Text style={styles.textsss}>Super AMOLED displays are an even advanced version of AMOLED displays developed by Samsung. Super AMOLED display is built with touch sensors on the display itself, as opposed to creating a separate touch sensitive layer (as in capacitive touchscreen). This makes it the thinnest display technology on the market.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Retina Display</Text>
                   <Text style={styles.textsss}>Retina Display is a term used by Apple for its high resolution (640 x 960 pixels) IPS LCD (with backlit LED) used by them in iPhone4. They call it the Retina display because its pixels cannot be individually identified by the human eye, thus making the display super sharp and brilliant.</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Haptic / Tactile touchscreen</Text>
                   <Text style={styles.textsss}>Haptic technology has been used by Blackberry and Nokia for their touchscreen smartphones targeted towards enterprise market. This technology provides a tactile feedback on a touch action on the screen thus providing an immediate and unmistakable confirmation to the user. Haptic technology has been found to significantly improve user performance, accuracy and satisfaction while typing on a touchscreen</Text>
               </View>
               <View>
                   <Text style={styles.textss}>Gorilla Glass</Text>
                   <Text style={styles.textsss}>Gorilla Glass is a special alkali-aluminosilicate glass shield with exceptional damage resistance that helps protect mobile displays from scratches, drops, and bumps of everyday use. Many companies like Motorola, Samsung and Nokia are now using Gorilla Glass to make their mobile displays more durable and reliable. It is always better to go for a smartphone with Gorilla Glass for that added protection and peace of mind.</Text>
               </View>

               <View>
                   <Text></Text>
               </View>
               </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
} 



const styles = StyleSheet.create({
    main:{
        padding:10,
   
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
})