import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import {SignIn} from '../screen/SignIn/SignIn.index';
import { Home } from '../screen/Home/Home.index';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}