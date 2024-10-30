import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import { Input, NumberInput } from './components/Input';


export default function App() {
  const [name, setName] = useState('')
  const [nim, setNim] = useState('')

  const handleNimChange = (value) => {
    setNim(value)
  }

  const handleChangeMyName = (value) => {
    setName(value)
  }

  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <Text>Name</Text>
      <Input name={name} onChangeText={handleChangeMyName} />
      <Text>NIM</Text>
      <NumberInput nim={nim} onChangeText={handleNimChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
