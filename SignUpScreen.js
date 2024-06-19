import React, { useState } from 'react-native-web';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native-web';

export default function SignUpScreen({ navigation }) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  // const handleSignUp = () => {
  //   navigation.navigate('Name', { Name, Email });
  // };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.Overview}>Jobizz</Text> */}
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={Name}
        onChangeText={setName}
        placeholderTextColor="#000"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />

      <Button title="Sign Up" onPress={() => handleSignUp()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    placeholder: {
      color: 'black',
      fontSize: 10,
      fontWeight: 'bold',
      marginBottom: 10,
    }
  // },
  // Overview: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   backgroundColor: 'midnightblue',
  // },
  }
});
