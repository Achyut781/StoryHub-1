import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';


export default class WriteStoryScreen extends React.Component {
   render() {
   
    
      return (
        <View style={styles.container}>
        <View><Image
        source = {require('../assets/write.png')}
        style = {{width:200, height:200}}
        /><Text style = {{textAlign:'center', fontSize:30, textDecorationLine: 'bold' }}>ToryHub</Text>
        </View>
          <View style={styles.inputView}>
            <TextInput style={styles.inputBox} placeholder="StoryTitle"
            ></TextInput>
            
          </View>
          <View style = {styles.inputView}>
            
            <TextInput style={styles.inputBox} placeholder="Author"
            value = {this.state.scannedStudentId}></TextInput>

            <TextInput style={styles.inputBox} placeholder="Write Your Story Here"
            value = {this.state.scannedStudentId}></TextInput>

            <TouchableOpacity style = {styles.submitButton}><Text style = {styles.buttonText}>Submit Your Story</Text></TouchableOpacity>
           
              
          </View>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
    color: 'orange',
  },
  displayText: { 
    fontSize: 15,
     textDecorationLine: 'underline' 
    },
  submitButton: {
    backgroundColor: 'skyblue',
    width:50,
    borderWidth: 1.5,
    borderLeftWidth:0,
    //alignSelf:'center',
    //marginLeft:200,
  },
  inputView:{
   flexDirection:'row',
   margin:20
  },
  inputBox:{
    width:200,
    height:40,
    borderWidth:1.5,
    borderRightWidth:0,
    fontSize:20
  },
  buttonText:{
fontSize:15,
textAlign:'center',
marginTop:10
  }
});
