import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase';

const HomeScreen = () => {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>HomeScreen</Text>
            <View className='my-5'>
                <TouchableOpacity
                onPress={handleLogout} 
                className='p-3 bg-lime-600 rounded-lg mx-5'
                >
                    <Text className='text-center text-lg font-bold text-slate-900'>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen