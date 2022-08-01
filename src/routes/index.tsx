import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SignIn from '../screen/SignIn/SignIn.index';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}