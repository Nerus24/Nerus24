import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

function DigestScreen() {
  const [inputText, setInputText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digest</Text>
      <TextInput
        style={[styles.textInput, { fontFamily: 'Calibri', width: 204, height: 109.73, overflow:'hidden'}]} 
        placeholder="Enter text here..."
        value={inputText}
        onChangeText={setInputText}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',


    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlignVertical: 'top',
    fontSize: "10px",
    lineHeight: "11px"

  },
});

export default DigestScreen;
