import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text, Button,Image,Linking, Content, DrawerLayoutAndroid, List, ListItem} from "react-native"
// import { Table, Row, Rows } from 'react-native-table-component';
export default function Institute({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
        <View style={styles.main}>
            {/* <Text>institute</Text>
            <Button title="Click me" onPress={()=>navigation.navigate('Home')} /> */}
            <Image style={{ width: 400, height: 150 }} source={require('../Images/h.jpg')} />
<Text style={styles.text}>We have two type of Institute</Text>
<Text style={styles.texts}>1) Mobile Hardware and Software</Text>
<Text style={styles.textss}>Complete Professional Course with Expert trainers</Text>
<Text style={styles.textsss}>Course Details</Text>
<View>
<Text style={styles.lists}>1)<Text style={styles.list}> Complete Hardware Trainig with Hardware expert (Android,IOS)</Text></Text>
<Text style={styles.lists}>2)<Text style={styles.list}> Complete Software Trainig with Software expert (Android,IOS)</Text></Text>
<Text style={styles.lists}>3)<Text style={styles.list}> All Type of mobile Glass change (Android,IOS)</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Duration = 2 months</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Hours : 2 hours daily</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> OFF Days : saturday,sunday</Text> </Text>
<Text style={styles.lists}>   <Text style={styles.list}> last !5 days techinian support with shop experiance</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Monthly Fee : 9000 </Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Total Fee : 18000 </Text>      </Text>
</View>
<View>
<Text style={styles.texts}>2) Web and Mobile Hybrid application developmenet</Text>
<Text style={styles.textss}>Categories</Text>
<Text style={styles.textss}>1) Web desigining Basic  (Short Course)</Text>
<Text style={styles.lists}>1)<Text style={styles.list}>  HTML5,CSS3,Bootstrap,Javascript,Database,Responsive web</Text></Text>
{/* <Text style={styles.lists}>2)<Text style={styles.list}> Complete Software Trainig with Software expert (Android,IOS)</Text></Text> */}
{/* <Text style={styles.lists}>3)<Text style={styles.list}> All Type of mobile Glass change (Android,IOS)</Text></Text> */}
<Text style={styles.lists}>   <Text style={styles.list}> Duration = 3 months</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Hours : 2 hours daily</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Days : Mon,Wed , Friday</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Class shadule = 3 dyas class on 1 week    </Text> </Text>
{/* <Text style={styles.lists}>   <Text style={styles.list}> last !5 days techinian support with shop experiance</Text></Text> */}
<Text style={styles.lists}>   <Text style={styles.list}> Monthly Fee :  4000 </Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Addmision =  2000</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Total Fee : 14000 </Text>      </Text>
</View>
<View>
{/* <Text style={styles.texts}>2) Web and Mobile Hybrid application developmenet</Text> */}
{/* <Text style={styles.textss}>Categories</Text> */}
<Text style={styles.textss}>2) Web desigining Advance and Desktop Application (Short Course)</Text>
<Text style={styles.lists}>1)<Text style={styles.list}>  React,Angularjs,Database,Authentication,Hosting</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Duration = 6 months</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Hours : 2 hours daily</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Class shadule = 3 dyas class on 1 week    </Text> </Text>
<Text style={styles.lists}>   <Text style={styles.list}> Days : Mon,Wed , Friday</Text></Text>
{/* <Text style={styles.lists}>   <Text style={styles.list}> last !5 days techinian support with shop experiance</Text></Text> */}
<Text style={styles.lists}>   <Text style={styles.list}> Monthly Fee :  4000 </Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Addmision =  2000</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Total Fee : 26000 </Text>      </Text>
</View>
<View>
{/* <Text style={styles.texts}>2) Web and Mobile Hybrid application developmenet</Text> */}
{/* <Text style={styles.textss}>Categories</Text> */}
<Text style={styles.textss}>3) Web desigining Advance and Desktop Application and Android application (Diploma)</Text>
<Text style={styles.lists}>1)<Text style={styles.list}>  Basic Web developmenet,Javascript,React,Expo,React naive</Text></Text>
{/* <Text style={styles.lists}>2)<Text style={styles.list}> Complete Software Trainig with Software expert (Android,IOS)</Text></Text> */}
{/* <Text style={styles.lists}>3)<Text style={styles.list}> All Type of mobile Glass change (Android,IOS)</Text></Text> */}
<Text style={styles.lists}>   <Text style={styles.list}> Duration =  1 year</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Hours : 2 hours daily</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Class shadule = 3 dyas class on 1 week    </Text> </Text>
{/* <Text style={styles.lists}>   <Text style={styles.list}> last !5 days techinian support with shop experiance</Text></Text> */}
<Text style={styles.lists}>   <Text style={styles.list}> Monthly Fee :  5000 </Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Addmision =  2000</Text></Text>
<Text style={styles.lists}>   <Text style={styles.list}> Total Fee : 62000 </Text>      </Text>
<View style={styles.contact}>
 <Button title="Fill Admission Form"  onPress={ ()=> Linking.openURL('https://forms.gle/jcVv8LHfE9SHyvj28') }/>
</View>
</View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
main:{
textAlign:'center',
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
    fontSize:30,
    // textDecorationStyle:under
    // fontStyle:"italic",
    // fontFamily:ar
    color:'red',
    fontWeight:"bold",
    paddingTop:20,
    textAlign:"center",
  },
  list:{
      fontSize:11,
      fontWeight:'bold',
  },
  lists:{
      marginLeft:10,
  },
  contact:{
    marginTop:60,
    marginBottom:30,
    alignItems:'center',
},
})