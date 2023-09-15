import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function WellcomeScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('Got error', err.message);
            }
        }

    }
    return (
        <View className='flex-1 justify-center m-4'>
            <View className='flex justify-center'>
                
                <Text>E-mail</Text>
                <TextInput 
                value={email}
                onChangeText={value=>setEmail(value)}
                className='bg-gray-300 rounded-lg p-3 my-2'></TextInput>
                <Text>Password</Text>
                <TextInput 
                value={password}
                onChangeText={value=>setPassword(value)}
                secureTextEntry className='bg-gray-300 rounded-lg p-3 my-2'></TextInput>
            </View>
            <View className='my-5'>
                <TouchableOpacity
                onPress={handleSubmit} 
                className='py-3 bg-lime-600 rounded-lg mx-5'
                >
                    <Text className='text-center text-lg font-bold text-slate-900'>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}