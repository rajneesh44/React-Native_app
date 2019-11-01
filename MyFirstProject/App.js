// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React,{Component} from 'react';
// import {
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   TextInput,

//   Image,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// // var yourPicture = require('./images/workpic.jpg');

// function func2(){
//   console.log(this)
// }
// export default class App extends Component{
//   constructor( ){
//     super()
//     // this.state = {
//     //   value:"edit me"
//     // }
//     // this.handleChangeText=this.handleChangeText.bind(this)
//     // this.state.customStyles={
//     //   color:'black'

//     state={
//       email:'',
//       password:''
//     }  
//   }

    

//     handleEmail=(text)=>{
//       this.setState({email:text})
//     }

//     handlePassword=(text)=>{
//       this.setState({password:text})
//     }
//     login = (email, pass) => {
//       alert('email: ' + email + ' password: ' + pass)
//    }

// //     setInterval(()=>{
// //       if(this.state.customStyles.color=='black'){
// //       this.setState({
// //         customStyles:{
// //           color:'green'
// //         }
// //       })
// //     }else { 
// //       this.setState({
// //       customStyles:{
// //         color:'black'
// //       }
      
// //     })
// //   }
// //     },1000)
// // }

// handleChangeText(newText){
//   //this.state
//   this.setState({
//     value:newText

//   })

// }

//   render(){
//     return(
//       <View style={styles.container}>
//         <Text style={styles.ams}>
//           AMS-ZHCET
//           </Text>
//           <TextInput style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="Email"
//             />
//         <Text style={[styles.welcome,this.state.customStyles]}>
//       Hello World
//         </Text>
//       </View>
//     );
//   };
// };

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignContent:"center",
//     backgroundColor:"#BFB5B3",
//   },
//   welcome:{
//     fontSize:20,
//     textAlign:"center",
//     color: 'red'
//   },
//   instructions:{
//     textAlign:"center",
//     color:"#333333",
//     marginBottom:5
//   },
//   ams:{
//     textAlign:'center',
//     color:'black',
//     fontSize:30,
//     marginBottom:200,
//     fontWeight: 'bold',
//     fontFamily:'serif'
//   },

// });

// // export default App;

import React, { Component } from 'react'
import { View,
         Text, 
         TouchableOpacity, 
         TextInput, 
         StyleSheet, 
         Platform,
         SafeAreaView,
         ScrollView,
          Button,

         Image,
         StatusBar
        } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      if(email=='rajneesh' && pass=='1234'){
      alert('email: ' + email + ' password: ' + pass)
    }
    else
      alert('fuck off you bastard')
   }
   
   render() {
      return (
         <View style = {styles.container}>
           <Text style={styles.ams}>
           AMS-ZHCET
          </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
             
              
           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                 () => this.login(this.state.email, this.state.password)
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
           
            
            <Text style={styles.simple}>
              New User
              </Text>     
              <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText2}> Register</Text>
            </TouchableOpacity>
             
        </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      flex:1,
      
     
      backgroundColor:"#BFB5B3",
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      marginBottom:10,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42c1',
      padding: 10,
      margin: 15,
      height: 40,
      marginBottom:30
   },

   submitButtonText:{
      color: 'white'
   },
   submitButtonText2:{

   },
   ams:{
     marginTop:50,
        textAlign:'center',
        color:'black',
        fontSize:30,
        marginBottom:100,
        fontWeight: 'bold',
        fontFamily:'serif'
      },
      simple:{
      
        color:'black',
        fontSize:20,
        textAlign:'center',
        marginBottom:10,
        fontFamily:'serif'

      }

})