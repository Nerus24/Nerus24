import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

function MagazineScreen() {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magazine</Text>
      <TextInput
        style={[styles.textInput, { fontFamily: 'Calibri', width: 224, height: 122, overflow:'hidden'}]}
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
      fontSize: "12px",
      lineHeight: "12px"
    },
  });
// (Styles will be the same as in DigestScreen.js, so no need to repeat here)

export default MagazineScreen;
