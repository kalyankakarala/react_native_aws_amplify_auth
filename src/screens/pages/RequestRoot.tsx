import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Request, UploadMsg, UploadReports, ConfirmRequest } from '../pages/request';
import {RequestStackParamList} from './RequestStackParams';


const RequestStack = createStackNavigator<RequestStackParamList>();

export function RequestRoot() {
	return (
		<RequestStack.Navigator>
			<RequestStack.Screen
				name="Request"
				component={Request}
                options={{
					headerShown: false,
				}}
			/>
            <RequestStack.Screen
				name="UploadMsg"
				component={UploadMsg}
                options={{
					headerShown: false,
				}}
			/>
            <RequestStack.Screen
				name="UploadReports"
				component={UploadReports}
                options={{
					headerShown: false,
				}}
			/>
			<RequestStack.Screen
				name="ConfirmRequest"
				component={ConfirmRequest}
				options={{
					headerShown: false,
				}}
                
			/>
		</RequestStack.Navigator>
	);
}