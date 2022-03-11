import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, Input, Card } from '@ui-kitten/components';
import { useForm, Controller } from "react-hook-form";





export function Signup({ navigation }: { navigation: StackNavigationProp<any> }) {

  const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.text} category='h3'>Sign Up</Text>
    </View>
  );

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword:''
    }
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card style={styles.card} header={Header}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label='Email'
            placeholder='Email'
          />
        )}
        name="email"
      />
      {errors.email && <Text>Email is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder='Password'
            label='Password'
          />
        )}
        name="password"
      />
      {errors.password && <Text>Password is required.</Text>}
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label='Confirm Password'
            placeholder='Confirm Password'
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>Password is required.</Text>}
      <View  style={styles.controlRow}>
        <Button size= "medium" style={styles.button} onPress={handleSubmit(onSubmit)}>Submit</Button>
      </View>
      
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  text: {
    margin: 5,
    color: '#fff'
  },
  button:{
    margin: 5
  },
  textInput: {
    borderRadius: 4,
    padding: 3,
    margin: 5,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    borderStyle: 'solid',
    padding: 10,
    justifyContent: 'center'
  },
  headerContainer: {
    backgroundColor: '#023e5c',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});