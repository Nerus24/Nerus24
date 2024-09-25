import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

function MonarchScreen() {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monarch</Text>
      <TextInput
        style={[styles.textInput, { fontFamily: 'Calibri', width: 193.06, height: 111.17, overflow:'hidden' }]}
        placeholder="Enter text here..."
        value={inputText}
        onChangeText={setInputText}
        multiline={true}
        numberOfLines={5}
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
      fontSize: "11px",
      lineHeight: "11px"

    },
  });


export default MonarchScreen;
