import { StatusBar } from "expo-status-bar";
import { StyleSheet ,View,Text,TouchableOpacity,TextInput} from "react-native";
import { Auth,db } from '../../firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,addDoc } from "firebase/firestore";
import { useState } from "react";
import { auth } from "./firebase-config";
export default function Register(){

 const [email,setEmail]=useState('')
 const [pwd,setPwd]=useState('')
 const [name,setName]=useState('')

 const handleRegister=async()=> {
    createUserWithEmailAndPassword(auth,email,pwd)
    .then(async userCredentials => {
        const docUser =await addDoc(collection(db,"user"),{
            userId:CurrentUser.uid,
            name:name,
            email:email,

        });
        console.log('Registered with :',CurrentUser)
        alert('Registered')
    })
    .catch(error => alert(error.message))
 }

 return(
    <View style ={styles.container} >
        <StatusBar style="auto" />
        <View style={{
            flexDirection: 'column'

        }}>
            <View style={{
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize:90,
                    color:'white',

                }}>Register</Text>
            </View>
        </View>
        <View style={{
            margin:40
        }}>
            <TextInput
            style={{
                height:40,
                borderColor:'gray',
                backgroundColor:'white',
                borderLeftWidth:1,
                paddingHorizontal:10,
                margin:10,

            }}
            onChangeText={setName}
            value={email}
            placeholder="Votre Nom"
        />
        <TextInput
        style={{
            height:40,
                borderColor:'gray',
                backgroundColor:'white',
                borderLeftWidth:1,
                paddingHorizontal:10,
                margin:10,

        }}
        onChangeText={setEmail}
            value={email}
            placeholder="Votre Email"
        />
        <TextInput
        style={{
            height:40,
                borderColor:'gray',
                backgroundColor:'white',
                borderLeftWidth:1,
                paddingHorizontal:10,
                margin:10,

        }}
        onChangeText={setPwd}
            value={email}
            placeholder="Votre mot de passe!"
        />
        </View>
        <TouchableOpacity
        style={{
            alignItems:"center",
            backgroundColor:"#97DFC3",
            padding:10,
            borderRadius:20,
            width:130,
            alignSelf:'center',
        }}
        onPress={() => handleRegister()}
        >
            <Text>create account</Text>
        </TouchableOpacity>
</View>


);
    }
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#03242C',
        flexDirection:'column',
        justifyContent:'center',
        padding:10,
    }
});









/*return(
        <View style ={styles.container} >
         <Text> Open up App.js to start working on your app !</Text>
         <StatusBar style="auto" />
        </View>
    );
}
const styles =StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent:'center',
        },
});*/