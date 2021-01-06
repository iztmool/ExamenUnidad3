import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Carrito de compras"
                component={CartScreen}
                options={{headerShown:true}}
            />

        </Stack.Navigator>
    )
}
