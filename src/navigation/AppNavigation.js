import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WellcomeScreen from '../screens/WellcomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const { user } = useAuth();
    if(user){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Wellcome'>
                    <Stack.Screen name='Wellcome' options={{headerShown: false}} component={WellcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}