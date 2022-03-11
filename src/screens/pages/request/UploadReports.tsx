import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';

export function UploadReports({ navigation }: { navigation: StackNavigationProp<any> }) {
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Upload Reports</Text>
            </Layout>
        </SafeAreaView>
      
    )
  }