import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Layout, Text, Avatar, Divider, Button, List, Card, Icon } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RequestStackParamList} from '../RequestStackParams';

type reqScreenProp = StackNavigationProp<RequestStackParamList, 'Request'>;

export function Request() {

  const navigation = useNavigation<reqScreenProp>();
    
    const renderItem = ( info: any ) => (
      <View style={styles.row}>
          <Button style={styles.button} size='tiny'
          onPress={() => navigation.navigate('UploadMsg', {patientId: info.item.id})}>Select</Button> 
          <Text style={styles.text} category='s2'>{info.item.name} </Text>
          <Text style={styles.text} category='s2'>{info.item.age} </Text>
          <Text style={styles.text} category='s2'>{info.item.gender} </Text>
          <Text style={styles.text} category='s2'>{info.item.relation} </Text>     
      </View>
              
      
    );

    const Header = () => (
      <View style={styles.headerContainer}>
        <Text style={styles.headText} category='h6'>Select the patient to proceed.</Text>
      </View>
    );

    const Footer = () => (
      <View  style={styles.footerContainer}>
        <View  style={styles.row}>
          <Icon
            style={styles.icon}
            fill='#0f0f0f'
            name='video-outline'
          />
          <Text style={styles.text} category='p1'>Video Consultation @ Rs.750 </Text>
        </View>
        <View  style={styles.row}>
          <Icon
            style={styles.icon}
            fill='#0f0f0f'
            name='phone-call-outline'
          />
          <Text style={styles.text} category='p1'>Call +91 40 45674567 to book appointment.</Text>    
        </View>
      </View>
      
    );
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container} level='1'>
                <Avatar style={styles.avatar} size='giant' source={require('../../../images/drpvnk.jpg')}/>
                <Text category='s2'>Consultant Cardiothoracic & Transplant Surgeon</Text>
                <Text category='s2' style={styles.text}>
                Dr. PV Naresh is an acclaimed Cardiothoracic Surgeon at the world-renowned Yashoda Hospitals in Hyderabad.
                He has an experience of more than 25 years in CTVS and Extensive Surgical Expertise in Off-Pump CABG 
                Total Arterial Revascularization, Minimal Invasive Valve Surgery, MIDCAB, Aortic Aneurysm Repairs and the 
                Minimal Invasive Valve Repairs and Replacements.He is known for Heart Failure Surgeries like LV Restorations,
                Post MI VSR Repairs, etc. Dr. Naresh has performed many Heart Transplants, Lung Transplants and Combined Heart
                Lung Transplantations, LVAD Implantations and also Congenital Cardiac Repairs.
                </Text>
            </Layout>
            <Divider />
            <Layout style={styles.container} level='1'>
                <Card style={styles.card} header={Header} footer={Footer}>
                  <List
                      style={styles.list}
                      data={pdata}
                      renderItem={renderItem}
                  />
                </Card>
            </Layout>
                        
        </SafeAreaView>
      
    )
}

const pdata = [
    {
      "id": "00D84RX",
      "name": "Kalyan",
      "age": "31",
      "gender": "MALE",
      "relation": "Self"
    },
    {
      "id": "HTWS4R4",
      "name": "Sairam",
      "age": "31",
      "gender": "MALE",
      "relation": "Others"
    }
  ]

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: 10,
    },
    avatar: {
      margin: 4,
    },
    list:{
        maxHeight: 210
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        margin: 5
    },
    text: {
      margin: 5,
      padding: 2
    },
    button:{
      margin: 2,
      padding: 2
    },
    headerContainer: {
      backgroundColor: '#023e5c',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    headText: {
      margin: 5,
      color: '#fff'
    },
    card: {
      flex: 1,
      margin: 10,
      borderRadius: 20,
      borderStyle: 'solid',
      padding: 10,
      justifyContent: 'center'
    },
    icon: {
      width: 20,
      height: 20,
      padding: 3,
      margin: 5,
    },
    footerContainer: {
      margin: 5,
      padding: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  });