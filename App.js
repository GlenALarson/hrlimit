import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [limits, setLimits] = useState(0)

  const calculate = (value) => {
    setAge(value)
    const lower = (220 - age) * 0.65
    const upper = (220 - age) * 0.85
    setLimits(lower + '-' + upper)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
      placeholder='Your age...'
      style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      ></TextInput>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 40,
    margin: 8,
  }, 
  field: {
    marginTop: 8,
    marginBottom: 8,
  }
});
