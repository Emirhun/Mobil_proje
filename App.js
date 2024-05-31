import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  
  const kamerayiAc = async () => {
    
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Kamera izni gerekli'); 
      return;
    }

    
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true, 
      aspect: [4, 3], 
      quality: 1, 
    });

    
    if (!result.cancelled) {
      Alert.alert('Fotoğraf çekildi', 'Fotoğraf URI: ' + result.uri);
    }
  };

  
  const galeriyiAc = async () => {
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Galeri izni gerekli'); 
      return;
    }

    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true, 
      aspect: [4, 3], 
      quality: 1, 
    });

   
    if (!result.cancelled) {
      Alert.alert('Fotoğraf seçildi', 'Fotoğraf URI: ' + result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DUYGU MAP</Text>
      </View>
      <View style={styles.overlay}></View>
      <View style={styles.emojiContainer}>
        <View style={[styles.emojiWrapper, styles.emojiWrapperBlue]}>
          <Text style={styles.emoji}>😢</Text>
        </View>
        <View style={[styles.emojiWrapper, styles.emojiWrapperGreen]}>
          <Text style={styles.emoji}>😄</Text>
        </View>
        <View style={[styles.emojiWrapper, styles.emojiWrapperGray]}>
          <Text style={styles.emoji}>😔</Text>
        </View>
        <View style={[styles.emojiWrapper, styles.emojiWrapperRed]}>
          <Text style={styles.emoji}>😠</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.optionButton} onPress={kamerayiAc}>
          <Text style={styles.optionText}>Kamera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={galeriyiAc}>
          <Text style={styles.optionText}>Galeriden Seçme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  emojiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emojiWrapperBlue: {
    backgroundColor: 'blue',
  },
  emojiWrapperGreen: {
    backgroundColor: 'green',
  },
  emojiWrapperGray: {
    backgroundColor: 'gray',
  },
  emojiWrapperRed: {
    backgroundColor: 'red',
  },
  emoji: {
    fontSize: 100,
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  optionButton: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
