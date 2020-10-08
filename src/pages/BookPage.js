import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialIcons"

const BookPage = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [anotations, setAnotations]  = useState('');
  const [read, setRead]  = useState(false);
  const [photo, setPhoto] = useState('');

  const onSave = () => {
    alert(title);
  }
  const handleNavigateBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>
      <TextInput style={styles.input}
        placeholder="Titulo"
        value={title}
        onChangeText={(text) => {
          setTitle(text)
        }}
      />
      <TextInput style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={anotations}
        onChangeText={(text) => {
          setAnotations(text)
        }}
      />
      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="photo-camera" size={18} color="#fff" />
      </TouchableOpacity>
        
      <TouchableOpacity 
        style={styles.saveButton}
        onPress={onSave}
      >
        <Text style={styles.saveButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}
        onPress={handleNavigateBack}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    fontSize: 22,
    borderColor: 'transparent',
    borderBottomColor: '#f39c12',
    borderWidth: 1,
    marginBottom: 10
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 32,
    height:32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor:'#f39c12',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#95a5a6',
    fontSize: 22,
    fontWeight: 'bold',
  }
})
export default BookPage;
