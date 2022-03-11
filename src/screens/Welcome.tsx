import React, { useRef, useEffect } from 'react';
import { SafeAreaView, Image, Animated, Easing, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Layout, Text } from '@ui-kitten/components';


export function Welcome({ navigation }: { navigation: StackNavigationProp<any> }) {

  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2, 
          duration: 500,
          easing: Easing.in(Easing.exp),
          useNativeDriver: true
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1, 
          duration: 500,
          easing: Easing.in(Easing.exp),
          useNativeDriver: true
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Layout style={styles.layout}>
          <Text style={styles.text} category='h4'>Welcome to Dr. PVNK Live</Text>
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Image source={require('../images/logo.png')} style={{
                  resizeMode: "cover",
                  height: 100,
                  width: 100
                }}/>
          </Animated.View>
          <Text style={styles.text} category='s1'>Patient Portal</Text>
          <Button style={styles.button} onPress={() => navigation.navigate('Login')}>Login</Button>
          <Button style={styles.button} onPress={() => navigation.navigate('Signup')}>Sign Up</Button>
        </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 15
  },
  button:{
    margin: 10
  }
});