import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome, Login, Signup, Portal } from '../screens';

const Stack = createStackNavigator();

export function AppNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
                options={{
					headerShown: false,
				}}
			/>
            <Stack.Screen
				name="Login"
				component={Login}
                options={{
					headerShown: false,
				}}
			/>
            <Stack.Screen
				name="Signup"
				component={Signup}
                options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Portal"
				component={Portal}
				options={{
					headerShown: false,
				}}
                
			/>
		</Stack.Navigator>
	);
}