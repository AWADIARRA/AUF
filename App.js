import React ,{useState} from 'react';
/*import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDate =async (value)=>{
    console.log(value,'log: le numero saisi')
    
    const jsonvalue =JSON.stringify(value)
    try{
        await AsyncStorage.setItem('@storage_key',jsonvalue)
        alert('Bien enreigistrer!')
    } catch(e){
        console.log(e,'log: Erreur pendant la sauvegarde')
    }
}
    export default function App(){
        const[phone,setPhone]=useState('')
         const getData= async () =>{

        try {
          const value=awaitAsyncStorage.setITem('@storage_key',jsonValue)
          alert('Bien enregistrer !')
        }catch (e){
          console.log(e,'log:Erreurs pendant la souvegard!')
        }
    
         }


        const removeData =async ()  =>{
          try{
        await AsyncStorage.removeItem('@storage_key')
        alert('Supprimer!')
    } catch(e){
        console.log(e,'log: Erreur pendant la suppression')
        }console.log('Done')

        }
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Write Data</Text>

                <TextInput
                style={{ marginVertical: 10,fontsize:17,color: "red" }}
                value={phone}
                placehorlder="+223 0000 0000"
                autocompleteType="Tel"
                keyboardType="phone-pad"
                TextContentType="telephone"
                onChangeText={setPhone}
                />
                <Button
                 onPress={() => saveDate(phone)}
                 title="Save Data"/>
                 <Text>Read Data</Text>
            <Text>........</Text>
            <Text>{phone}</Text>
            <Text>........</Text>
        
            <Button
              onPress={() =>  getData()}
              title="Get Data"

              />

            <Text>........</Text>

            <Button
              onPress={( )=> removeData()}
              title="remove Data"
                
              />
            </View>
        );
        
    }
    const styles =StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent:'center',

        },
    });*/

   
    import Register from './Register';
    export default function App(){
      return(
        <Register/>
      );
      
    }

    