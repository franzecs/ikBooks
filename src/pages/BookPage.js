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
        <Icon name="photo-camera" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.optionsButtons}>
        <TouchableOpacity style={[styles.defaultButton, styles.cancelButton]} onPress={handleNavigateBack}>
          <Icon name="block" size={30} color="#fff" />
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.defaultButton, styles.saveButton]} onPress={onSave}>
          <Icon name="done" size={30} color="#fff" />
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>  
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
    color: '#0097e6',
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    fontSize: 22,
    color: '#fff',
    borderColor: 'transparent',
    borderBottomColor: '#f39c12',
    borderWidth: 1,
    marginBottom: 10
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 60,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  optionsButtons: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  defaultButton: {
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor:'#44bd32',
  },
  textButton: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor:'#f39c12',
    marginRight:20
  },
})
export default BookPage;
