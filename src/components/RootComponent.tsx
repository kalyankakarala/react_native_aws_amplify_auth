import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../navigators/AppNavigator';

export const Root = () => {
	

	return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <AppNavigator/>
                </NavigationContainer>
            </ApplicationProvider>
        </React.Fragment>
  
);
};