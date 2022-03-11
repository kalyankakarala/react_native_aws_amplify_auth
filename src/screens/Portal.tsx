import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import { Icon } from '@ui-kitten/components';
import { Home, Consultations, RequestRoot, Notifications, Patients, Calendar } from './pages';

const Drawer = createDrawerNavigator();

export function Portal({ navigation }: { navigation: StackNavigationProp<any> }) {
  
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#023e5c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
                <Icon
                    style={styles.icon}
                    fill='#fff'
                    name='log-out-outline'
                />
            )
            }}>
            <Drawer.Screen name="Home" component={Home} 
              options={{
                drawerLabel: 'Home',
                drawerIcon: () => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='home-outline'
                    />
                ),
              }}
            />
            <Drawer.Screen name="Notifications" component={Notifications} 
              options={{
                drawerLabel: 'Notifications',
                drawerIcon: () => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='bell-outline'
                    />
                ),
              }}
            />
            <Drawer.Screen name="Family" component={Patients} 
              options={{
                drawerLabel: 'Family',
                drawerIcon: ({ color, size }) => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='people-outline'
                    />
                ),
              }}
            />
            <Drawer.Screen name="Consult Now" component={RequestRoot} 
              options={{
                drawerLabel: 'Consult Now',
                drawerIcon: () => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='file-add-outline'
                    />
                ),
              }}
            />
            <Drawer.Screen name="My Consultations" component={Consultations} 
              options={{
                drawerLabel: 'My Consultations',
                drawerIcon: () => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='clipboard-outline'
                    />
                ),
              }}
            />
            <Drawer.Screen name="Calendar" component={Calendar} 
              options={{
                drawerLabel: 'Calendar',
                drawerIcon: () => (
                    <Icon
                    style={styles.icon}
                    fill='#0f0f0f'
                    name='calendar-outline'
                    />
                ),
              }}
            />
          </Drawer.Navigator>
    );
  };

  const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      padding: 3,
      margin: 5,
    },
  });