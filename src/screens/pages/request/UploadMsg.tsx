import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RequestStackParamList} from '../RequestStackParams';

type msgScreenProp = StackNavigationProp<RequestStackParamList, 'UploadMsg'>;

type msgRouteProp = RouteProp<RequestStackParamList, 'UploadMsg'>;

export function UploadMsg() {
    const navigation = useNavigation<msgScreenProp>();
    const route = useRoute<msgRouteProp>();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Selected Patient: {route.params.patientId}</Text>
                <Text category='h1'>Upload Message</Text>
            </Layout>
        </SafeAreaView>
      
    )
  }