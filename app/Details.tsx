import {StyleSheet, Platform ,Alert,TextInput,Text} from 'react-native';
import {Stack } from 'expo-router';
import { Button } from '@react-navigation/elements';
import React, {useEffect,useState} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import movimientos from './movimientos'
import tranferencia from './tranferencia'


import {
  createStaticNavigation,
  useNavigation,
  useRoute
} from '@react-navigation/native';



export default function NotFoundScreen( ) {
  console.log("Movimientos")
  const route = useRoute();

  

  const [labelText ] = useState(String(route.params.email));
  const [labelSaldo] = useState(String(route.params.saldo));
  
 
  const navigation = useNavigation();
  const getMovimientos = async () => {
    
    try {
      console.log("Movimientos")
      const response = await fetch(
        'http://192.168.1.69:3000/menu', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          opcion: '4',
          email: 'maria@gmail.com',
        }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Atras!' }} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Menu</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>

      <Button style={styles.button}
       onPress={() =>   Alert.alert("Tranferencias no terminada")}>
       Tranferencia
       
      </Button>
      <Button style={styles.button} onPress={() => Alert.alert("Retiro no terminado")}>
       Retiro
      </Button>

      <Button  style={styles.button} onPress={() => navigation.navigate('movimientos')}>
       Movimientos
      </Button>

      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  button :{ 
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor : 'white',
    color: "red",
  },
});
