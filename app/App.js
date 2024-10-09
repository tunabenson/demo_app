import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';

export default function App() {
  const [response, setResponse] = useState(null);  // Store fetched response
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');


    const getResponse = async () => {
      try {
        //Paste address instead of this part
        const resp = await fetch(`PASTE-ADDRESS-HERE//evaluate/${name1}/${name2}`);
        const textResp = await resp.text();
        //make sure response what we want
        if(!textResp.includes('html')) setResponse(textResp);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setResponse(error.message);
      } finally {
      }
    };

  const onPressed = () => {
    getResponse()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name1}
        onChangeText={setName1}
        placeholder="Type your name here"
      />
      <Text style={styles.label}>Enter another name:</Text>
      <TextInput
        style={styles.input}
        value={name2}
        onChangeText={setName2}
        placeholder="Type your name here"
      />
      <TouchableOpacity style={styles.button} onPress={onPressed}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.bottomLabel}>Compatability Score: {response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  bottomLabel:{
    fontSize:40,
    margin:10,
    fontWeight:'bold',
    fontStyle:'italic'

  }
});